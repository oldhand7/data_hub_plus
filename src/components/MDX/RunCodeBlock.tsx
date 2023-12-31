/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */
// @ts-nocheck 

import { isValidElement, useState, useEffect } from 'react';
import * as React from 'react';
import { IconTerminal } from '../Icon/IconTerminal';
import { IconCopy } from 'components/Icon/IconCopy';
import {
  SandpackProvider,
  SandpackConsumer,
} from '@codesandbox/sandpack-react/unstyled';
type LogLevel = 'info' | 'warning' | 'error';
import { runCode } from '../../utils/judgeApi';
import { useRouter } from 'next/router';

interface RunCodeBlockProps {
  level?: LogLevel;
  children: React.ReactNode;
  mode?: 'python' | 'sql' | 'R';
}

function LevelText({ type }: { type: LogLevel }) {
  switch (type) {
    case 'warning':
      return <span className="text-yellow-50 bg-none me-1">Warning: </span>;
    case 'error':
      return <span className="text-red-40 me-1">Error: </span>;
    default:
      return null;
  }
}

function RunCodeBlock({ children }: RunCodeBlockProps) {
  const router = useRouter();

  const [sMessage, setMessage] = useState('');
  const [sResult, setResult] = useState({ val: '', success: 1 });

  const [isCompiling, setIsCompiling] = useState(false)
  const [codeMode, setCodeMode] = useState(71);
  useEffect(() => {
    let message: string | undefined;
    console.log(children);
    let className = (children as any).props.children.props.className;
    if (className == 'language-python') {
      setCodeMode(71);
    } else if (className == 'language-sql') {
      setCodeMode(82);
    } else setCodeMode(80);

    if (typeof children === 'string') {
      message = children;
    } else if (
      isValidElement(children) &&
      typeof children.props.children === 'string'
    ) {
      message = children.props.children;
    } else {
      message = (children as any).props.children?.props?.children;
    }
    setMessage(message || '');
  }, []);

  const goView = () => {
    console.log(sMessage);

    localStorage.setItem("code", sMessage.toString())
    localStorage.setItem("codeMode", codeMode.toString())
    window.open("/codeplay", "_blank")
    // router.push('/codeplay');

  }
  const onRun = async () => {
    try {
      console.log(sMessage);
      setIsCompiling(true)
      let res = await runCode(sMessage, codeMode);
      console.log(res);
      setIsCompiling(false)
      if (res.stderr != null) {
        setResult({ ...sResult, val: ' ' + res.stderr, success: 0 });
      } else {
        setResult({
          ...sResult,
          val: res.stdout == null ? 'success' : res.stdout,
          success: 1,
        });
      }
    } catch (error) { setIsCompiling(false) }
    // console.log(result);
  };
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (!copied) {
      return;
    } else {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <SandpackProvider>
      <SandpackConsumer>
        {(sandpack) => (
          <>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  display: 'flex',
                  background: '#ffffff1c',
                  padding: '10px',
                }}>
                <button onClick={onRun} style={{}}>
                  Run Code
                </button>
                <button onClick={goView} style={{ marginLeft: 'auto' }}>
                  CodeView
                </button>
              </div>

              <textarea
                className="code-textarea"
                value={sMessage}
                style={{ padding: '20px' }}
                onChange={(e) => setMessage(e.target.value)}
                rows={10}
                cols={50}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}>
              <pre
                translate="no"
                dir="ltr"
                className={
                  'rounded-lg leading-6 h-full w-full overflow-x-auto flex items-center bg-wash dark:bg-gray-95 shadow-lg text-[13.6px] overflow-hidden'
                }>
                <div style={{ alignSelf: 'flex-start', padding: '10px' }}>
                  output:
                </div>
                <div className="py-[18px] ps-5 font-normal ">
                  <p className="sp-pre-placeholder overflow-hidden">
                    {isCompiling && "compiling..."}
                    {!isCompiling && sResult.val}
                  </p>
                </div>
              </pre>
            </div>
          </>
        )}
      </SandpackConsumer>
    </SandpackProvider>

    //   <div
    //     className="px-8 pt-4 pb-6 text-primary-dark dark:text-primary-dark font-mono text-code whitespace-pre overflow-x-scroll"
    //     translate="no"
    //     dir="ltr">
    //   </div>
    // </div>
  );
}

export default RunCodeBlock;

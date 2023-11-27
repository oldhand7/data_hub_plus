/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */
// @ts-nocheck 

import { isValidElement, useState, useEffect } from 'react';
import * as React from 'react';
import { IconTerminal } from '../Icon/IconTerminal';
import { IconCopy } from 'components/Icon/IconCopy';
import { runCode } from 'utils/judgeApi';

type LogLevel = 'info' | 'warning' | 'error';

interface CodeExecProps {
  level?: LogLevel;
  children: React.ReactNode;
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

function CodeExec({ level = 'info', children }: CodeExecProps) {
  let message: string | undefined;

  message = (children as any)?.props?.children;
  // if (typeof children === 'string') {
  //   message = children;
  // } else if (
  //   isValidElement(children) &&
  //   typeof children.props.children === 'string'
  // ) {
  //   message = children.props.children;
  // } else {
  //   throw Error('Expected CodeExec children to be a plain string.');
  // }

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

  const onRunCode = async (code: string) => {
    let result = await runCode(code, 71);
    console.log('result -> ', result);

    // fetch('https://judge0-ce.p.rapidapi.com/submissions', {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json',
    //     accept: 'application/json',
    //     'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
    //     'X-RapidAPI-Key': '060ee3c24amshb6778dec4f5244dp1a0aeejsn848bcf191367',
    //   },
    //   body: body,
    // })
    //   .then((temp) => {
    //     if (temp.ok) {
    //       return temp.json();
    //     }
    //   })
    //   .then((result) => {
    //     fetch(`https://judge0.p.rapidapi.com/submissions/${result.token}`, {
    //       method: 'GET',
    //       headers: {
    //         'x-rapidapi-host': 'judge0.p.rapidapi.com',
    //         'x-rapidapi-key':
    //           '060ee3c24amshb6778dec4f5244dp1a0aeejsn848bcf191367',
    //       },
    //     }).then((res) => {
    //       console.log(res);
    //     });
    //   });
  };

  return (
    <div className="rounded-lg bg-secondary dark:bg-gray-50 h-full">
      <div className="bg-gray-90 dark:bg-gray-60 w-full rounded-t-lg">
        <div className="text-primary-dark dark:text-primary-dark flex text-sm px-4 py-0.5 relative flex-reverse">
          <button
            style={{ marginLeft: 'auto', marginRight: '30px' }}
            onClick={() => onRunCode((message as any)?.props?.children)}>
            <IconTerminal className="inline-flex me-2 self-center" /> Run Code
          </button>
          {/* <div>
            <IconTerminal className="inline-flex me-2 self-center" /> Terminal
          </div> */}
          <div>
            <button
              className="w-full text-start text-primary-dark dark:text-primary-dark "
              onClick={() => {
                console.log((message as any)?.props?.children);

                window.navigator.clipboard.writeText(message ?? '');
                setCopied(true);
              }}>
              <IconCopy className="inline-flex me-2 self-center" />{' '}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
        </div>
      </div>
      <div
        className="px-8 pt-4 pb-6 text-primary-dark dark:text-primary-dark font-mono text-code whitespace-pre overflow-x-scroll"
        translate="no"
        dir="ltr">
        <LevelText type={level} />
        {message}
      </div>
    </div>
  );
}

export default CodeExec;

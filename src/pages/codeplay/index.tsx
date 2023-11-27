
// @ts-nocheck
import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import { runCode } from 'utils/judgeApi';
// import { Controlled as CodeMirror } from 'react-codemirror2';
import('codemirror/mode/r/r')
import('codemirror/mode/sql/sql')
import('codemirror/lib/codemirror.css')

import('codemirror/theme/material.css')
import('codemirror/mode/python/python')

const CodeMirror = dynamic(
    () =>

        import('react-codemirror2')
    ,
    { ssr: false }
);
let gValue = ""
const SplitEditor = () => {
    const [code, setCode] = useState<string>('');
    const [result, setResult] = useState<unknown>('');
    const [splitRatio, setSplitRatio] = useState<number>(50);
    const [activeButton, setActiveButton] = useState(71);
    const editorRef = useRef(null);


    useEffect(() => {
        try {
            let codeMode = parseInt(localStorage.getItem("codeMode") || "")
            console.log(code);

            setActiveButton(codeMode)
            setCode("hello")
            // editorRef.current.setValue(code)
            // localStorage.removeItem("code")
            // localStorage.removeItem("codeMode")
        } catch (error) {
            console.log(error);

        }

    }, [])
    const handleCodeChange = (editor: any, data: any, value: string) => {



    }


    const handleClick = (button: any) => {
        editorRef.current.setValue("");
        setActiveButton(button);
    };

    useEffect(() => {
        (async () => {
            if (window != undefined) {
            }
        })()
    })
    const handleRunCode = async () => {
        try {
            // let codeMode = 71
            // if (activeButton == 'python') {
            //     codeMode = 71
            // } else if (activeButton == 'sql') {
            //     codeMode = 82
            // } else codeMode = 80

            let input = editorRef.current.getValue();
            let res = await runCode(input, activeButton);
            console.log(res);

            if (res.stderr != null) {
                setResult(res.stderr);
            } else {
                setResult(res.stdout == null ? 'success' : res.stdout);
            }
        } catch (error) {
            console.log(error);

        }
    };

    return (
        <div style={{ display: 'flex', maxHeight: '100vh', overflowY: "auto" }}>
            <div style={{ flex: splitRatio }}>
                <div className="buttons-container">
                    <button
                        className={activeButton === 71 ? 'button-active' : 'button'}
                        onClick={() => handleClick(71)}
                    >
                        python
                    </button>
                    <button
                        className={activeButton === 82 ? 'button-active' : 'button'}
                        onClick={() => handleClick(82)}
                    >
                        sql
                    </button>
                    <button
                        className={activeButton === 80 ? 'button-active' : 'button'}
                        onClick={() => handleClick(80)}
                    >
                        r
                    </button>
                </div>

                <CodeMirror
                    value={code}
                    editorDidMount={(editor) => {

                        console.log(editor);
                        let code = localStorage.getItem("code")
                        if (code != null) editor.setValue(code)
                        editor.setSize(null, "90vh")
                        // localStorage.removeItem("code")
                        editorRef.current = editor; // Save the editor ref for later use
                    }}
                    style={{ height: 600 }}

                    options={{
                        theme: 'material',
                        lineNumbers: true,
                    }}

                    onBeforeChange={handleCodeChange}
                />
            </div>
            <div style={{ flex: 100 - splitRatio, height: '100vh' }}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: 16,
                        borderBottom: '1px solid #eee',
                    }}
                >
                    <button className='primary' onClick={handleRunCode}>Run</button>

                    <span>Output:</span>
                </div>
                <div style={{ padding: 16 }}>
                    {typeof result === 'string' ? (
                        <pre style={{ color: 'blue' }}>{result}</pre>
                    ) : (
                        <pre style={{ color: "red" }}>{JSON.stringify(result, undefined, 2)}</pre>
                    )}
                </div>
            </div>
            <div
                style={{
                    position: 'absolute',
                    left: `${splitRatio}%`,
                    top: 0,
                    bottom: 0,
                    width: 5,
                    backgroundColor: '#eee',
                    cursor: 'col-resize',
                }}
                draggable={false}
                onDrag={(e) => {
                    setSplitRatio((e.pageX / window.innerWidth) * 100);
                }}
            ></div>
        </div>
    );
};

export default SplitEditor;
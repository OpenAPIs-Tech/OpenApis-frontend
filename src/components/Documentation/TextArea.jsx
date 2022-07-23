import React, { useState } from 'react'
import './Documentation.css'
// import useLocalStorage from '../../customHooks/useLocalStorage'
import CodeMirror from '@uiw/react-codemirror';
import { createTheme } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';
import { javascript } from '@codemirror/lang-javascript';
import { json as jsonLang } from '@codemirror/lang-json';

const TextArea = ({ useLocalStorageName, title, data }) => {
    const [innerText, setInnerText] = useState(data)
    // const [innerText, setInnerText] = useLocalStorage(useLocalStorageName, JSON.stringify(data))

    console.log(data)
    const myTheme = createTheme({
        theme: 'dark',
        settings: {
            background: 'rgb(34 34 34)',
            foreground: 'rgb(34 34 34)',
            caret: 'rgb(34 34 34)',
            selection: '#036dd626',
            selectionMatch: 'white',
            lineHighlight: '#8a91991a',
            gutterBackground: 'rgb(34 34 34)',
            gutterForeground: 'white',
        },
        styles: [
            { tag: t.comment, color: '#787b8099' },
            { tag: t.variableName, color: '#0080ff' },
            { tag: [t.string, t.special(t.brace)], color: 'white' },
            { tag: t.number, color: '#5c6166' },
            { tag: t.bool, color: '#5c6166' },
            { tag: t.null, color: '#5c6166' },
            { tag: t.keyword, color: '#5c6166' },
            { tag: t.operator, color: '#5c6166' },
            { tag: t.className, color: 'white' },
            { tag: t.definition(t.typeName), color: '#5c6166' },
            { tag: t.typeName, color: '#5c6166' },
            { tag: t.angleBracket, color: 'white' },
            { tag: t.tagName, color: '#5c6166' },
            { tag: t.attributeName, color: '#5c6166' },
            { tag: t.bracket, color: 'white' }
        ],
    });

    return (
        <>
            <div className="code-editor">
                <span style={{ color: "white" }}>{title}</span>
                <CodeMirror
                    value={data}
                    // value={innerText}
                    theme={myTheme}
                    // lineWrapping={true}
                    onChange={setInnerText}
                    extensions={[jsonLang()]}
                    // extensions={[javascript({ jsx: true, lineWrapping: true })]}
                    tabSize={20}
                    options={{
                        keyMap: 'dark',
                        mode: 'XML',
                        lineNumbers: true,
                        lineWrapping: true,
                        mode: "text/html",
                        matchBrackets: true
                    }}
                />
            </div>
        </>
    )
}

export default TextArea
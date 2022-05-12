import React, { useState } from 'react'
import Editor from './components/Editor'


const App = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  return (
    <>
    <div className='panel top-panel'>
    <Editor title="HTML" language="xml" value={html} onChange={setHtml} />
    <Editor title="CSS" language="css" value={css} onChange={setCss}/>
    <Editor title="JS" language="javascript" value={js} onChange={setJs}/>
    </div>
    <div className='panel'>

    </div>
    </>
  )
}

export default App
import React from 'react'
import Editor from './components/Editor'
const App = () => {
  return (
    <>
    <div className='panel top-panel'>
    <Editor title="HTML" language="xml" />
    <Editor title="CSS" language="css" />
    <Editor title="JS" language="javascript" />
    </div>
    <div className='panel'>

    </div>
    </>
  )
}

export default App
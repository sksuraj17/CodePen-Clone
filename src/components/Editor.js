import React from 'react'
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
import { Controlled as ControlledEditor } from 'react-codemirror2';

const editor = ({language,title}) => {
  return (
      <div className='editor-container'>
        <div className='editor-title'>
            {title}
            <button>O/C</button>
        </div>
        <ControlledEditor className='code-mirror-wrapper' options={{
            lineWrapping:true,
            lint:true,
            mode:language,
            theme:"material",
            lineNumbers:true
        }}/>
      </div>

  );
};

export default editor
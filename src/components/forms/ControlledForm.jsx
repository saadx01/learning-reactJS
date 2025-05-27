import React from 'react';
import { useState } from 'react';

function ControlledForm() {
    const [text, setText] = useState('');
    // console.log("Controlled Form");
      function handleSubmit() {
            alert(text); // Access input value directly
        }
    
    return (
        <div className='m-2'>

            <label className='p-1 m-2' htmlFor="textInput">Enter Text:</label>
            <input className='border border-gray-400 p-1 m-2' id='textInput' type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={handleSubmit} className='text-sm px-4 py-1 bg-blue-600 text-white rounded-4xl shadow-md hover:bg-blue-700 transition'>Submit</button>
        </div>
    );
}

export default ControlledForm;
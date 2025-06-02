import React, {useRef} from 'react';

const UncontrolledForm = () => {

  const inputRef = useRef();

  function handleSubmit() {
    alert(inputRef.current.value); // Access input value directly
  }

    return (
        <div className='m-2'>
            <label className='p-1 m-2' htmlFor="textInput">Enter Text (Uncontrolled):</label>
            <input className='border border-gray-400 p-1 m-2' type="text" ref={inputRef} />
            <button className='text-sm px-4 py-1 bg-blue-600 text-white rounded-4xl shadow-md hover:bg-blue-700 transition' onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default UncontrolledForm;
import React from 'react';

const DisplayUsersButton = ({ showUsers, setShowUsers }) => {
    return (
        <div className='flex justify-center my-4'>
            <button 
                onClick={() => setShowUsers(prev => !prev)}
                className={`px-6 py-2 text-white rounded-xl shadow-md transition 
                    ${showUsers ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 hover:bg-gray-500'}`}
            >
                {showUsers ? "Hide Users" : "Show Users"}
            </button>
        </div>
    );
};

export default DisplayUsersButton;
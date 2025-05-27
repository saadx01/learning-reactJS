import React from 'react';

const UsersList = (props) => {
    return (
        <div className='max-w-md mx-auto mt-6 p-4 bg-white rounded-lg shadow'>
            {props.showUsers == true ?
            <>
            <h2 className='text-2xl font-semibold mb-4 text-center'>User List</h2>
                <ul className="space-y-2">
                    {props.users.map(user => (
                        <li 
                        key={user.id}
                        className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                        >
                            {user.name}
                        </li>
                    ))}
                </ul>
            </>
            :
            <>
                <h2>Display is set to False</h2>
            </>
            }
        </div>
    );
};

export default UsersList;
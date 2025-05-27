import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayUsersButton from './DisplayUsersButton';
import UsersList from './UsersList';

function Users(props) {
    const [users, setUsers] = useState([]);
    const [showUsers, setShowUsers] = useState(false);
    const [searchItem, setSearchItem] = useState("");
    const filteredUsers = users.filter(user =>
            user.name.toLowerCase().includes(searchItem.toLowerCase())
            )
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                setUsers(res.data);
                console.log(res);
            })
            .catch(err => console.log(err));
    }, []);

    const handleInputChange = (e) => {
        setSearchItem(e.target.value);
        // setFilteredUsers()/
    };

    return (
        <div>
            <div className='flex flex-row justify-around'>
                <DisplayUsersButton showUsers={showUsers} setShowUsers={setShowUsers}/>
                <div className='m-2'>
                    <label className='p-1 m-2' htmlFor="textInput">Search name:</label>
                    <input type="text" value={searchItem} onChange={handleInputChange} className='border border-gray-400 p-1 m-2'/>
                </div>     
            </div>
            <UsersList showUsers={showUsers} users={filteredUsers}/>
        </div>
    );
}

export default Users;

import React from 'react';

function Navlink(props) {
    // const props = true;
    const isValid = props ? "yes" : "no";
    
    return (
        <li className=''>
            {props?.name}
        </li>
    );
}

export default Navlink;
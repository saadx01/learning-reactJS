import Link from 'next/link';
import React from 'react';

function Navlink(props) {
    return (
        <div>
            <Link href={`/${props.url}`}>
                <li>
                    {props?.name}
                </li>
            </Link>
        </div>


    );
}

export default Navlink;
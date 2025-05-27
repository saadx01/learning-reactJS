// rsf or rsc for using code snippet

import React from 'react';
import logo from "../../../public/logo.png";
import Navlink from './navlink';
import Image from 'next/image';


function Header(props) {

    const navLinks = [
        {
            name: "Home"
        },
                {
            name: "Teams"
        },
                {
            name: "Tournament"
        }
    ]

    return (
        <div className='bg-white w-full p-2 flex flex-row justify-between'>
            <Image src={logo} height={100} width={100} />
            <ul className='flex gap-[6px]'>
            {
                navLinks.map((nav, index) => {
                    return <Navlink key={index} name={nav.name} />
                })
            }
                {/* <Navlink name={"Home"} />
                <Navlink name={"Teams"} />
                <Navlink name={"Tournament"} /> */}
            </ul>
            <div>
                <button className='px-4 py-2 rounded-xl bg-black text-white mx-2'>Sign Up</button>
                <button className='px-4 py-2 rounded-xl bg-black text-white'>Sign In</button>
            </div>
        </div>
    );
}

export default Header;
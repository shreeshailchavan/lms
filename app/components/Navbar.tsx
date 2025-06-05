import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Navitems from './Navitems';
import { SignedIn,SignedOut,SignInButton,SignOutButton,UserButton } from '@clerk/nextjs';

const Navbar = () =>{
    return(
        <nav className='navbar'>
            <Link href="/">
            <div className='flex items-center gap-2.5 cursor-pointer'>
                <Image src="/images/logo.svg" alt='logo' width={46} height={44} />
            </div>
            </Link>

            <div className='flex items-center gap-8'>
               <Navitems/>
               <SignedOut>
                <div className="flex items-center gap-2">
                    <Link href="/sign-in" className='btn-signin'>Sign In</Link>
                </div>
               </SignedOut>
               <SignedIn>
                <UserButton afterSwitchSessionUrl='/'/>
               </SignedIn>
            </div>
        </nav>
    )
}

export default Navbar;
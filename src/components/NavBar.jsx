import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton,SignUpButton, UserButton } from '@clerk/clerk-react'
import { Button } from './ui/button'
const NavBar = () => {
    
    const navigate = useNavigate()



    return (
        <div className="flex justify-between items-center h-16 bg-[#ededed] py-16  w-[1440px]  mx-auto ">
            <div className="flex items-center gap-10 ">
                <h2 className="ml-0 text-2xl font-bold hover:cursor-pointer" onClick={()=>navigate('/')}>Lando</h2>
                <ul className="flex gap-6">
                    <li className="cursor-pointer hover:text-blue-500" onClick={()=>navigate("/")}>Home</li>
                    <li className="cursor-pointer hover:text-blue-500" onClick={()=>navigate("/pricing")}>Pricing</li>
                    <li className="cursor-pointer hover:text-blue-500" onClick={()=>navigate("/about-us")}>About Us</li>
                    <li className="cursor-pointer hover:text-blue-500" onClick={()=>navigate("/contact-us")}>Contact</li>
                </ul>
            </div>

            <div className="flex items-center gap-6">
                <SignedOut>
                    <SignInButton>
                        <div className="flex gap-3">
                            <button className="font-semibold text-gray-600 hover:text-blue-500">Sign In</button>
                        </div>
                    </SignInButton>
                    <SignUpButton>
                            <Button className='px-4 py-2'>
                                Sign Up
                            </Button>
                        </SignUpButton>
                </SignedOut>
                <SignedIn>
                    <Button >
                        <Link href="/dashboard">Dashboard</Link></Button>
                </SignedIn>
            </div>
        </div>

    )

}

export default NavBar;
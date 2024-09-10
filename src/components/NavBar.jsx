import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react'
import { Button } from './ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { ChevronDown, Sparkles, PenLine, DollarSign, BarChart3, FileText, Presentation } from "lucide-react"

const NavBar = () => {
    const navigate = useNavigate()
    const [openMenu, setOpenMenu] = useState(null)
    
    const features = {
        aiAssistants: [
            { icon: Sparkles, title: "AI Business Plan Generator", description: "Create business plans faster with AI" },
            { icon: PenLine, title: "AI Writing Assist", description: "Write, translate, and refine your text with AI" },
            { icon: DollarSign, title: "AI Financial Assist", description: "Automated forecasts and AI recommendations" },
        ],
        topFeatures: [
            { icon: FileText, title: "Strategic Planning", description: "Develop actionable strategic plans on-the-go" },
            { icon: BarChart3, title: "Financial Forecasting", description: "Make accurate financial forecasts faster" },
            { icon: Presentation, title: "AI Pitch Deck Generator", description: "Use AI to generate your investor deck" },
        ],
        integrations: [
            { title: "QuickBooks", description: "Sync and compare with your QuickBooks data" },
            { title: "Xero", description: "Sync and compare with your Xero data" },
        ],
    }

    return (
        <div className="flex justify-between items-center h-16 bg-[#ededed] py-16 w-[1440px] mx-auto">
            <div className="flex items-center gap-10">
                <h2 className="ml-0 text-2xl font-bold hover:cursor-pointer" onClick={() => navigate('/')}>Lando</h2>
                <ul className="flex gap-6">
                    <li className="cursor-pointer hover:text-blue-500" onClick={() => navigate("/")}>Home</li>
                    <li className="cursor-pointer hover:text-blue-500" onClick={() => navigate("/pricing")}>
                                <div className='flex items-center'>
                                Features <ChevronDown className="w-4 h-4 ml-1" />
                                </div>
                               
                           
                    </li>
                    <li className="cursor-pointer hover:text-blue-500" onClick={() => navigate("/pricing")}>Pricing</li>
                    <li className="cursor-pointer hover:text-blue-500" onClick={() => navigate("/about-us")}>About Us</li>
                    <li className="cursor-pointer hover:text-blue-500" onClick={() => navigate("/contact-us")}>Contact</li>
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
                    <Button>
                        <Link to="/dashboard">Dashboard</Link>
                    </Button>
                </SignedIn>
            </div>
        </div>
    )
}

export default NavBar
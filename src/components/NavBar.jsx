import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/clerk-react'
import { Button } from './ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { ChevronDown, Sparkles, PenLine, DollarSign, BarChart3, FileText, Presentation } from "lucide-react"

const NavBar = () => {
    const navigate = useNavigate()

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
    }

    return (
        <div className="flex justify-between items-center h-16 bg-[#ededed] py-16 w-full mx-auto">
            <div className="flex items-center gap-10">
                <h2 className="ml-2 p-4 text-2xl font-bold hover:cursor-pointer" onClick={() => navigate('/')}>Lando</h2>
                <ul className="flex gap-6">
                    <li className="cursor-pointer hover:text-blue-500" onClick={() => navigate("/")}>Home</li>

                    {/* Features Dropdown Menu */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <li className="cursor-pointer hover:text-blue-500 flex items-center relative">
                                Features <ChevronDown className="w-4 h-4 ml-1" />
                            </li>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent 
                            className="p-4 bg-white border border-gray-200 rounded-lg shadow-lg w-[600px] grid grid-cols-2 gap-4 absolute left-1/2 transform -translate-x-1/3 mt-2"
                            style={{ zIndex: 1000 }}
                        >
                            <div>
                                <h4 className="font-semibold px-2 text-sm">AI Assistants</h4>
                                {features.aiAssistants.map((feature, index) => (
                                    <DropdownMenuItem
                                        key={index}
                                        className="flex items-start gap-2 px-2 py-2 hover:bg-gray-100 cursor-pointer rounded-md"
                                    >
                                        <feature.icon className="w-5 h-5 mt-1" />
                                        <div className="flex flex-col">
                                            <span className="font-medium">{feature.title}</span>
                                            <span className="text-xs text-gray-500">{feature.description}</span>
                                        </div>
                                    </DropdownMenuItem>
                                ))}
                            </div>
                            <div>
                                <h4 className="font-semibold px-2 text-sm">Top Features</h4>
                                {features.topFeatures.map((feature, index) => (
                                    <DropdownMenuItem
                                        key={index}
                                        className="flex items-start gap-2 px-2 py-2 hover:bg-gray-100 cursor-pointer rounded-md"
                                    >
                                        <feature.icon className="w-5 h-5 mt-1" />
                                        <div className="flex flex-col">
                                            <span className="font-medium">{feature.title}</span>
                                            <span className="text-xs text-gray-500">{feature.description}</span>
                                        </div>
                                    </DropdownMenuItem>
                                ))}
                            </div>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <li className="cursor-pointer hover:text-blue-500" onClick={() => navigate("/pricing")}>Pricing</li>
                    <li className="cursor-pointer hover:text-blue-500" onClick={() => navigate("/about-us")}>About Us</li>
                    <li className="cursor-pointer hover:text-blue-500" onClick={() => navigate("/contact-us")}>Contact</li>
                </ul>
            </div>

            <div className="flex items-center gap-6 p-10">
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

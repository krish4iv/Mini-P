import four from '../assets/section_4.png'
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"



const ContactPage = () => {




    const submitContactForm = async (data) => {
        console.log("Logging Data", data);

    };


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();



    return (
        
            <section className='flex flex-col  w-[1440px] mx-auto'>
                <div className='flex w-11/12 mx-auto mb-20 mt-14'>

                    <div className='flex flex-col'>
                        <img src={four} height={400} className='object-cover' />

                    </div>

                    <div className='flex flex-col items-start justify-center mx-auto space-y-6'>
                        <h1 className='text-4xl font-bold text-center'>Contact Us</h1>
                        <div className='w-[70%]'>
                        <p className=''>Explore the future with us.
                        Feel free to get in touch.</p>
                        </div>
                        

                        <form onSubmit={handleSubmit(submitContactForm)}>
                            <div className="flex flex-col gap-7">
                                <div className="flex flex-col">
                                    {/* First Name */}
                                    <div className="flex flex-col gap-2 ">
                                        <label htmlFor="firstName" >
                                            First Name
                                        </label>
                                        <Input
                                            className='bg-white border-white rounded-md shadow-sm placeholder-white-400 placeholder:font-semibold'
                                            type="text"
                                            name="firstName"
                                            id="firstName"
                                            placeholder="Enter First Name"
                                            {...register("firstName", { required: true })}
                                        />
                                        {errors.firstName && (
                                            <span className="text-xs text-yellow-100 ">
                                                Please Enter Your name
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* email */}
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" >
                                        Email Address
                                    </label>
                                    <Input
                                        className='bg-white border-white rounded-md shadow-sm placeholder:font-semibold placeholder-white-400'
                                        type="email"
                                        name="email"
                                        placeholder="Enter email Addrress"
                                        {...register("email", { required: true })}
                                    />
                                    {errors.email && (
                                        <span className="text-[12px] text-yellow-100">
                                            Please enter your email address
                                        </span>
                                    )}
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="message" >
                                        Message
                                    </label>
                                    <Textarea
                                        name="message"
                                        id="message"
                                        cols="30"
                                        rows="7"
                                        className='bg-white border-white rounded-md shadow-sm placeholder:font-semibold placeholder-white-400'
                                        placeholder="Enter Your Message Here"
                                        {...register("message", { required: true })} />
                                    {errors.message && (
                                        <span className="text-xs text-yellow-100">
                                            Please enter your message
                                        </span>
                                    )}
                                </div>




                                {/* button */}
                                <button
                                    type="submit"
                                    className="px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </section>
    )
}

export default ContactPage
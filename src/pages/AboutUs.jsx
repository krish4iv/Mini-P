import React from 'react'
import section_4 from '../assets/section_4.png';
import people from '../assets/people.png';
import personImage from '../assets/persons/Image.png';
import section_3 from '../assets/section_3.png';
const teamMembers = [
    { name: 'Mia Khalifa', role: 'CEO', image: personImage },
    { name: 'Alya  Khalifa', role: 'CTO', image: personImage },
    { name: 'pramukh Khalifa', role: 'Masturbator', image: personImage },
    { name: 'Sujay Khalifa', role: 'Masturbator', image: personImage },
    { name: 'Kaustubh Khalifa', role: 'Masturbator', image: personImage },
    { name: 'Matthew Low', role: 'Tech Support', image: personImage },
    { name: 'Lucas Bell', role: 'Key Account Manager', image: personImage },
    { name: 'Michaela Hans', role: 'Platform Development', image: personImage },
]




const AboutUs = () => {

    return (
        <div>
            <section className='flex flex-col  w-[1440px] mx-auto mt-14 mb-14'>
                <div className='flex flex-col items-center justify-between w-11/12 mx-auto '>
                    <h1 className='text-4xl font-semibold text-center'>About us</h1>
                    <p className='w-6/12 m-10 text-center '>We offer revolutionary solution to industry problems. Join Lando community and experience the benefits of company optimization today!</p>
                    <div className='mb-8'>
                        <img src={people} />
                    </div>
                    <h1 className='text-4xl font-semibold text-center'>Our Mission</h1>
                    <p className='w-6/12 m-10 mb-12 text-center border-b-2'>At Lando, we are committed to providing excellent services to our customers and clients and to help them achieve the best outcomes. We believe that we can make a positive impact on our community, industry and the world. Our Lando team is dedicated to providing the best possible service and support, and we are always looking for ways to improve and innovate.</p>
                    <div className='flex items-center justify-between w-full gap-8 px-12 mx-auto mt-12 mb-20'>
                        <div className='flex items-end justify-between w-5/12 ml-2'><p className='text-4xl font-semibold text-center'>Let's start working more efficiently today!</p></div>
                        <div>
                            <img src={section_4} className='object-fit ' width={600} />
                        </div>
                    </div>

                    <div className='flex flex-col w-11/12 mx-auto mt-12'>
                        <p className='text-2xl font-semibold text-center'>Our Team</p>
                        <p className='w-6/12 m-10 mx-auto text-center'>We offer revolutionary solution to industry problems. Join Lando community and experience the benefits of company optimization today!</p>

                        <div>
                            <div className="p-8 ">
                                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                                    {teamMembers.map((member, index) => (
                                        <div key={index} className="flex flex-col items-center">
                                            <div className="relative w-32 h-32 mb-4">
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    layout="fit"

                                                    className="rounded-full object-fit"
                                                />
                                            </div>
                                            <h3 className="text-lg font-semibold text-center">{member.name}</h3>
                                            <p className="text-sm text-center text-gray-600">{member.role}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        
                            <section className="bg-[#ededed] py-16 flex justify-center w-11/12 mx-auto">
                                <div className="flex items-center w-full max-w-5xl p-8 bg-white rounded-lg shadow-md">
                                    <div className="w-full md:w-1/2">
                                        <h2 className="mb-4 text-3xl font-bold text-gray-900">Get started with Lando today</h2>
                                        <p className="mb-6 text-lg text-gray-600">Start optimizing your processes today.</p>
                                        <a
                                            href="#"
                                            className="px-6 py-3 font-semibold text-white transition duration-300 bg-blue-600 rounded hover:bg-blue-500"
                                        >
                                            Sign up now
                                        </a>
                                    </div>
                                    <div className="flex justify-center w-full mt-8 md:w-1/2 md:mt-0">
                                        <img
                                            src={section_3}
                                            alt="3D Graphic"
                                            className="w-64 md:w-80"
                                        />
                                    </div>
                                </div>
                            </section>
                    </div>

                </div>



            </section>
        </div>
    )
}

export default AboutUs
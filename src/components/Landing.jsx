import React from 'react'
import { FaLocationDot, FaUserGraduate, FaHtml5, FaReact, FaCode, FaPython, FaWindows, FaGithub, FaLinkedin, FaChrome, FaLink, FaArrowUpRightFromSquare, FaWhatsapp, FaTelegram } from "react-icons/fa6";
import { MdEmojiPeople, MdOutlineLanguage, MdOutlineWorkOutline, MdOutlineWeb, MdEmail, MdContacts } from "react-icons/md";
import { FaUniversity, FaCss3Alt, FaTools } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss, SiAstro, SiMongodb, SiFirebase, SiFramer } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import BackToTopButton from './BackToTopButton';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
const Landing = () => {
    return (
        <div className='mt-4 mx-4 md:my-10 md:mx-72 gap-2 h-full flex flex-col'>
            <div className='flex flex-row justify-center'>
                <div className='flex flex-col md:flex-row'>
                    <img src="avatar.png" alt="" className='mb-4 md:w-64 bg-secondary rounded-xl' />
                    <div className='flex flex-col gap-4 ml-4'>
                        <div className='flex items-center text-4xl text-primary'>
                            <h1 className='text-3xl md:text-6xl font-bold text-info'>Isa Lias</h1>
                            <div className='flex ml-16 md:ml-32 gap-4'>
                                <motion.a
                                    whileHover={{
                                        rotate: "10deg",
                                        scale: 1.5,
                                    }}
                                    href="https://github.com/isalias98"><FaGithub /></motion.a>
                                <motion.a
                                    whileHover={{
                                        rotate: "-10deg",
                                        scale: 1.5,
                                    }}
                                    href="https://www.linkedin.com/in/isa-lias-251077203/"><FaLinkedin /></motion.a>
                            </div>
                        </div>
                        <h1 className='text-2xl md:text-4xl '>I am &nbsp;
                            <TypeAnimation className='text-primary font-bold'
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Frontend Developer',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'Backend Developer',
                                    1000,
                                    'Web Developer',
                                    1000,
                                    'Batman',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            /></h1>

                        <p className='text-left md:text-justify md:text-lg mt-4 text-info'>With three years of IT experience, I'm passionate about web development and seeking opportunities in frontend developer or service desk analyst roles.</p>
                    </div>
                </div>
            </div>
            <div className=' grid grid-flow-row grid-cols-4 md:grid-cols-6 h-full gap-3 mt-2'>
                <h1 className='col-span-2 p-1 px-2 rounded-xl text-info bg-secondary flex gap-1 items-center text-sm md:text-xl'><FaLocationDot className='text-primary' />Labuan F.T, Malaysia</h1>
                <h1 className='col-span-2 p-1 px-2 rounded-xl text-info bg-secondary flex gap-1 items-center text-sm md:text-xl'><MdEmojiPeople className='text-primary' />Looking for Work</h1>
                <h1 className='col-span-2 p-1 px-2 rounded-xl text-info bg-secondary flex gap-1 items-center text-sm md:text-xl'><FaUserGraduate className='text-primary' />Bachelor Degree IT</h1>
                <h1 className='col-span-2 md:col-span-3 p-1 px-2 rounded-xl text-info bg-secondary flex gap-1 items-center text-sm md:text-xl'><FaUniversity className='text-primary' />Open University Malaysia</h1>
                <h1 className='col-span-3 p-1 px-2 rounded-xl text-info bg-secondary flex gap-1 items-center text-sm md:text-xl'><MdOutlineLanguage className='text-primary' />English, Malay & Mandarin</h1>
            </div>
            <div className='mt-16'>
                <h1 className='text-2xl font-bold text-info flex items-center gap-2'><FaCode className='text-3xl' /> My Skills</h1>
                <p className='text-left md:text-lg mt-2 text-info'>Skills acquired through years of self-learning and practical application.</p>
                <div className='bg-secondary w-full h-[1px] mt-2'></div>
                <div className='grid grid-cols-3 md:grid-cols-6 grid-flow-row mt-4 gap-4'>
                    <div className='text-5xl col-span-1 bg-secondary grid place-content-center rounded-xl p-2'><FaHtml5 className='text-info' /></div>
                    <div className='text-5xl col-span-1 bg-secondary grid place-content-center rounded-xl p-2'><FaCss3Alt className='text-info' /></div>
                    <div className='text-5xl col-span-1 bg-secondary grid place-content-center rounded-xl p-2'><IoLogoJavascript className='text-info' /></div>
                    <div className='text-5xl col-span-1 bg-secondary grid place-content-center rounded-xl p-2'><FaReact className='text-info' /></div>
                    <div className='text-5xl col-span-1 bg-secondary grid place-content-center rounded-xl p-2'><SiTailwindcss className='text-info' /></div>
                    <div className='text-5xl col-span-1 bg-secondary grid place-content-center rounded-xl p-2'><TbBrandNextjs className='text-info' /></div>
                    <div className='text-5xl col-span-1 bg-secondary grid place-content-center rounded-xl p-2'><SiAstro className='text-info' /></div>
                    <div className='text-5xl col-span-1 bg-secondary grid place-content-center rounded-xl p-2'><SiMongodb className='text-info' /></div>
                    <div className='text-5xl col-span-1 bg-secondary grid place-content-center rounded-xl p-2'><SiFirebase className='text-info' /></div>
                    <div className='text-5xl col-span-1 bg-secondary grid place-content-center rounded-xl p-2'><SiFramer className='text-info' /></div>
                    <div className='text-5xl col-span-1 bg-secondary grid place-content-center rounded-xl p-2'><FaPython className='text-info' /></div>
                    <div className='text-5xl col-span-1 bg-secondary grid place-content-center rounded-xl p-2'><FaWindows className='text-info' /></div>

                </div>
            </div>
            <div className='mt-16'>
                <h1 className='text-2xl font-bold text-info flex items-center gap-2'><MdOutlineWorkOutline className='text-3xl' /> My Experience</h1>
                <p className='text-left md:text-lg mt-2 text-info'>Previous employment experiences throughout the years.</p>
                <div className='bg-secondary w-full h-[1px] mt-2'></div>
                <div className='mt-8 bg-secondary p-4 rounded-xl'>
                    <div className='flex justify-between text-info '>
                        <div className='flex md:gap-4 items-center'>
                            <h1 className='font-bold md:text-2xl flex items-center gap-2'><span className='bg-base-100 p-2 rounded-xl'><FaChrome /></span>PyCon MY</h1>
                        </div>
                        <h1 className='font-semibold md:text-2xl'>2024 Jan - 2024 Apr</h1>
                    </div>
                    <div className='bg-base-100 p-4 rounded-xl mt-4'>
                        <h1 className=' md:text-xl font-semibold'>Volunteer ( Web Developer )</h1>
                        <p className='md:text-justify md:text-lg mt-2'> <span className='font-extrabold'>PyCon MY</span>, a Malaysian community dedicated to Python, offers an opportunity for professionals, developers, and enthusiasts to collaborate on web development. As part of the team, I was responsible for designing, constructing, and maintaining the conference website, enhancing my web programming skills and working with enthusiastic Python community members.</p>
                    </div>
                </div>
                <div className='mt-8 bg-secondary p-4 rounded-xl'>
                    <div className='flex justify-between text-info '>
                        <div className='flex gap-4 items-center'>
                            <h1 className='font-bold md:text-2xl flex items-center gap-2'><span className='bg-base-100 p-2 rounded-xl'><FaTools /></span> LFSA</h1>
                        </div>
                        <h1 className='font-semibold md:text-2xl'>2023 May - 2023 Sep</h1>
                    </div>
                    <div className='bg-base-100 p-4 rounded-xl mt-4'>
                        <h1 className='md:text-xl font-semibold'>Intern ( IT Support )</h1>
                        <p className='md:text-justify md:text-lg mt-2'>During my internship at <span className='font-extrabold'>Labuan Financial Services Authority ( LFSA )</span>, I gained expertise in infrastructure management and IT support, including WAN-LAN configuration, system administration, and computer repair. I debugged hardware and software problems in Red Hat Linux and Windows settings, enhancing my skills in network design and system upgrades. Collaborating with experts, I refined my abilities to navigate modern technology complexities and deepen my understanding of IT basics.</p>
                    </div>
                </div>
                <div className='mt-8 bg-secondary p-4 rounded-xl'>
                    <div className='flex justify-between text-info '>
                        <div className='flex gap-4 items-center'>
                            <h1 className='font-bold md:text-2xl flex items-center gap-2'><span className='bg-base-100 p-2 rounded-xl'><FaTools /></span>EG Soft Solutions</h1>
                        </div>
                        <h1 className='font-semibold md:text-2xl'>2020 Oct - 2023 May</h1>
                    </div>
                    <div className='bg-base-100 p-4 rounded-xl mt-4'>
                        <h1 className='md:text-xl font-semibold'>Staff ( IT Support Technician )</h1>
                        <p className='md:text-justify md:text-lg mt-2'>During my time at the company, I gained expertise in various IT fields, including Windows-based systems, WAN-LAN configuration, and computer repair. I was responsible for identifying and fixing software and hardware issues, ensuring smooth operation on various platforms and networks. My expertise also extended to Windows Server systems, improving network security and system efficiency. My background demonstrates dedication to IT infrastructure reliability and lifelong learning in technology.</p>
                    </div>
                </div>
            </div>
            <div className='mt-16 mx-2 h-full'>
                <h1 className='text-2xl font-bold text-info flex items-center gap-2'><MdOutlineWeb className='text-3xl' /> Featured Work</h1>
                <p className='text-left md:text-lg mt-2 text-info'>Project and work that I have developed throughout the years.</p>
                <div className='bg-secondary w-full h-[1px] mt-2'></div>
                <div className="flex flex-col items-center rounded-lg bg-secondary mt-4 shadow md:flex-row md:w-full ">
                    <img className="object-cover w-full rounded-t-lg  md:w-64 md:rounded-none md:rounded-s-lg bg-base-100" src="giggood.png" alt="" />
                    <div className="flex flex-col p-4 leading-normal">
                        <h1 className="mb-2 text-3xl font-bold tracking-tight text-info">Giggood</h1>
                        <p className="mb-3 font-normal">This is the project that I have made for my final year project during my study at <span className='font-bold'>Open University Malaysia</span>.</p>
                        <a href="https://github.com/isalias98" className='flex gap-2 items-center bg-base-100 p-2 rounded-2xl font-bold shadow-xl shadow-base-100 mt-8'><FaLink />Website Link</a>
                    </div>
                </div>
                <div className='flex justify-center items-center text-center md:text-2xl mt-8 bg-secondary rounded-2xl p-2 md:mx-30'>
                    <a href="/project" className='flex items-center gap-2'>Check out my other projects <FaArrowUpRightFromSquare /></a>
                </div>
            </div>

            <div className='mt-16 md:flex justify-end hidden'>
                <BackToTopButton />
            </div>
        </div>
    )
}

export default Landing
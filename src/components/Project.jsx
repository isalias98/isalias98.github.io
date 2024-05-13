import { MdOutlineWeb } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
const Project = () => {
    return (
        <div className='mx-4 my-6 md:mx-72 gap-2 h-full flex flex-col'>
            <h1 className='text-2xl font-bold text-info flex items-center gap-2'><MdOutlineWeb className='text-3xl' />My Projects</h1>
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
            <div className="flex flex-col items-center rounded-lg bg-secondary mt-4 shadow md:flex-row md:w-full ">
                <img className="object-cover w-full rounded-t-lg  md:w-64 md:rounded-none md:rounded-s-lg" src="uc.jpg" alt="" />
                <div className="flex flex-col p-4 leading-normal">
                    <h1 className="mb-2 text-3xl font-bold tracking-tight text-info">Wishify</h1>
                    <p className="mb-3 font-normal">A website that me and my friend came up with that works as a wishing list and can be shared to others.</p>
                    <a href="https://github.com/isalias98" className='flex gap-2 items-center bg-base-100 p-2 rounded-2xl font-bold shadow-xl shadow-base-100 mt-8'><FaLink />Still in progress</a>
                </div>
            </div>
        </div>
    )
}

export default Project
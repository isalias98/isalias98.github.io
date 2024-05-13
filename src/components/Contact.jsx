import { MdEmail, MdOutlineWhatsapp } from "react-icons/md";
import { FaTelegram, FaPhone } from "react-icons/fa6";

const Contact = () => {
    return (
        <div className='mx-4 my-6 md:mx-72 gap-2 h-full flex flex-col'>
            <h1 className='text-2xl font-bold text-info flex items-center gap-2'><MdEmail className='text-3xl' />Contact Me</h1>
            <p className='text-left md:text-lg mt-2 text-info'>I would love to hear from you. Please fill out this form or shoot us an email.</p>
            <div className='bg-secondary w-full h-[1px] mt-2'></div>
            <section class="">
                <div class="container py-6 mx-auto">
                    <div class="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
                        <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
                            <div>
                                <MdEmail className="inline-block p-3 rounded-full bg-primary text-5xl text-info" />
                                <h2 class="mt-4 text-base font-medium text-info">Email</h2>
                                <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Reach me out through email.</p>
                                <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">isalias9803@gmail.com</p>
                            </div>
                            <div>
                                <MdOutlineWhatsapp className="inline-block p-3 rounded-full bg-primary text-5xl text-info" />
                                <h2 class="mt-4 text-base font-medium text-info">WhatsApp</h2>
                                <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Chat with me at WhatsApp</p>
                                <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">WhatsApp Link</p>
                            </div>
                            <div>
                                <FaTelegram className="inline-block p-3 rounded-full bg-primary text-5xl text-info" />
                                <h2 class="mt-4 text-base font-medium text-info">Email</h2>
                                <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Telegram me for more info</p>
                                <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">Telegram Link</p>
                            </div>
                            <div>
                                <FaPhone className="inline-block p-3 rounded-full bg-primary text-5xl text-info" />
                                <h2 class="mt-4 text-base font-medium text-info">Email</h2>
                                <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Give me a direct call if there is anything urgent.</p>
                                <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">Phone number</p>
                            </div>

                        </div>

                        <div class="p-4 py-6 rounded-lg bg-secondary md:p-8">
                            <form>
                                <div class="-mx-2 md:items-center md:flex">
                                    <div class="flex-1 px-2">
                                        <label class="block mb-2 text-sm text-info font-bold ">First Name</label>
                                        <input type="text" placeholder="John " class="block w-full px-5 py-2.5 mt-2 text-info border border-neutral rounded-lg placeholder-gray-600 bg-base-100  focus:border-primary  focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>
                                    <div class="flex-1 px-2">
                                        <label class="block mb-2 text-sm text-info font-bold ">Last Name</label>
                                        <input type="text" placeholder="Doe " class="block w-full px-5 py-2.5 mt-2 text-info border border-neutral rounded-lg placeholder-gray-600 bg-base-100  focus:border-primary  focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>
                                </div>

                                <div class="mt-4">
                                    <label class="block mb-2 text-sm text-info font-bold">Email address</label>
                                    <input type="email" placeholder="johndoe@example.com" class="block w-full px-5 py-2.5 text-info border border-neutral rounded-lg placeholder-gray-600 bg-base-100  focus:border-primary  focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div class="w-full mt-4">
                                    <label class="block mb-2 text-sm text-info font-bold">Message</label>
                                    <textarea class="block w-full h-32 px-5 py-2.5 mt-2 md:h-56 text-info border border-neutral rounded-lg placeholder-gray-600 bg-base-100  focus:border-primary  focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                                </div>

                                <button class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-info capitalize transition-colors duration-300 transform bg-primary rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 hover:text-neutral focus:ring-opacity-50">
                                    Send message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
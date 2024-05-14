import { MdEmail, MdOutlineWhatsapp } from "react-icons/md";
import { FaTelegram, FaPhone } from "react-icons/fa6";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const serviceID = "service_uwr7229";
    const templateID = "template_es5p0vd";
    const publicKEY = "2hxcvOHDtsInNsuVc";
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(serviceID, templateID, form.current, {
                publicKey: publicKEY,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            ).finally(() => {
                window.location.reload()
                window.scrollTo({ top: 0 })
            })
    };
    return (
        <div className='mx-4 my-6 md:mx-72 gap-2 h-full flex flex-col'>
            <h1 className='text-2xl font-bold text-info flex items-center gap-2'><MdEmail className='text-3xl' />Contact Me</h1>
            <p className='text-left md:text-lg mt-2 text-info'>I would love to hear from you. Please fill out this form or shoot us an email.</p>
            <div className='bg-secondary w-full h-[1px] mt-2'></div>
            <section className="">
                <div className="container py-6 mx-auto">
                    <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
                        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                            <div>
                                <MdEmail className="inline-block p-3 rounded-full bg-primary text-5xl text-info" />
                                <h2 className="mt-4 text-base font-medium text-info">Email</h2>
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Reach me out through email.</p>
                                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">isalias9803@gmail.com</p>
                            </div>
                            <div>
                                <MdOutlineWhatsapp className="inline-block p-3 rounded-full bg-primary text-5xl text-info" />
                                <h2 className="mt-4 text-base font-medium text-info">WhatsApp</h2>
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Chat with me at WhatsApp</p>
                                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">WhatsApp Link</p>
                            </div>
                            <div>
                                <FaTelegram className="inline-block p-3 rounded-full bg-primary text-5xl text-info" />
                                <h2 className="mt-4 text-base font-medium text-info">Email</h2>
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Telegram me for more info</p>
                                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">Telegram Link</p>
                            </div>
                            <div>
                                <FaPhone className="inline-block p-3 rounded-full bg-primary text-5xl text-info" />
                                <h2 className="mt-4 text-base font-medium text-info">Email</h2>
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Give me a direct call if there is anything urgent.</p>
                                <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">Phone number</p>
                            </div>

                        </div>

                        <div className="p-4 py-6 rounded-lg bg-secondary md:p-8">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="mt-4">
                                    <label className="block mb-2 text-sm text-info font-bold">Name</label>
                                    <input type="text" name="from_name" placeholder="John Doe" className="block w-full px-5 py-2.5 text-info border border-neutral rounded-lg placeholder-gray-600 bg-base-100  focus:border-primary  focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>
                                <div className="mt-4">
                                    <label className="block mb-2 text-sm text-info font-bold">Email address</label>
                                    <input type="email" name="from_email" placeholder="johndoe@example.com" className="block w-full px-5 py-2.5 text-info border border-neutral rounded-lg placeholder-gray-600 bg-base-100  focus:border-primary  focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div className="w-full mt-4">
                                    <label className="block mb-2 text-sm text-info font-bold">Message</label>
                                    <textarea name="message" className="block w-full h-32 px-5 py-2.5 mt-2 md:h-56 text-info border border-neutral rounded-lg placeholder-gray-600 bg-base-100  focus:border-primary  focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                                </div>

                                <input type="submit" value="Send" className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-info capitalize transition-colors duration-300 transform bg-primary rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 hover:text-neutral focus:ring-opacity-50" />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
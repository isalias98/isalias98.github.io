import React from 'react'
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
const BackToTopButton = () => {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div>
            {backToTopButton && (
                <button className='bg-secondary rounded-2xl p-4 text-2xl' onClick={scrollUp}><FaArrowUp /></button>
            )}
        </div>
    )
}

export default BackToTopButton
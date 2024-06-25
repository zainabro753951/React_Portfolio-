"use client"
// Typed.js
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Auto_typed = () => {
    const el = useRef(null);
    const typed = useRef(null);

    useEffect(() => {
        const options = {
            strings: ["Zain Abro", "Frontend Developer", "Website Designer!"],
            typeSpeed: 50,
            backSpeed: 25,
            loop: true
        };

        typed.current = new Typed(el.current, options);

        return () => {
            typed.current.destroy();
        };
    }, []);

    return (
        <div className="flex md:justify-start gap-2 xs:justify-center items-center  font-semibold font-poppins not-italic xs:text-3xl sm:text-4xl md:text-2xl">
            <p>I'm</p>
            <p className='text-[#F59E0B]' ref={el} />
        </div>
    );
};

export default Auto_typed;
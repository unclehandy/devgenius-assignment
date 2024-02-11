"use client"
import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js';

export default function Header(){

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Discover Unforgettable Events with EventMakers!"],
            typeSpeed: 50,
            loop: true,
        });

        return () => {
            
            typed.destroy();
        };
    }, []);

    return(
        <div className="relative h-96 overflow-hidden">
        <img src="/image/header.jpg" alt="Header" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* overlay hitam */}
        <div className="absolute inset-0 flex justify-center items-center text-amber-400 flex-col space-y-4 ">
            <h1 className="text-4xl font-bold "><span ref={el}></span></h1>
            <p className='text-slate-300 w-1/2'>
            Explore a world of exciting events with EventMakers. From music concerts to art festivals, we provide exclusive access to unforgettable experiences. Find, join, and create lasting memories with us.
            </p>
        </div> 
        </div>
    )
}
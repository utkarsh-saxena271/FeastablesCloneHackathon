import React, { useRef } from 'react'
import CrunchyBar from '../model/CrunchyBar';
import { NavLink } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const Hero = () => {
  const hedref = useRef();
  const buttonref = useRef();
  
  useGSAP(() => {
    gsap.from(hedref.current,{
      y: 100,
      scale:0,
      opacity:0,
      duration:1.5,
      ease: "cubic-bezier(0.19, 1, 0.22, 1)",
      delay: 0.7
    })
    gsap.from(buttonref.current, {
      y:100,
      scale:0,
      opacity:0,
      delay: 1.5,
      duration:1.5,
      ease: "cubic-bezier(0.19, 1, 0.22, 1)",
    })
  })
  return (
    <div className="flex flex-col items-center justify-center w-full h-[65vh] bg-feastlavender border-b-10 border-t-10 border-feastpurple rounded-2xl  sm:flex-row sm:justify-between shadow-lg mb-1 sm:p-2">
            <div className="flex flex-col items-center justify-center w-[70%] h-[60%] sm:w-[40%] sm:h-full relative">
              <div className="h-[10rem] w-[10rem] sm:h-[14rem] sm:w-[14rem] rounded-[50%] bg-feastdarker absolute shadow-[0_0_120px_20px] shadow-feastdarker" ></div>
              <CrunchyBar/>
            </div>
            <div className="sm:w-[60%] sm:h-full flex flex-col items-center justify-center sm:gap-10 sm:py-15">
              <h1 className="text-3xl font-family-bangers text-feastdarker text-wrap text-center sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl italic"  ref = {hedref}>
                Chocolate That Empowers Cocoa Farmers
              </h1>
              <NavLink to="/products">
                <button ref={buttonref} className="w-[15rem] text-xl bg-feastgreen text-feastdark px-6 py-4 rounded-lg border-2 border-feastdarker font-bold font-family-bangers tracking-wider italic cursor-pointer active:scale-95 sm:w-[18rem] md:w-[20rem] lg:w-[22rem] xl:w-[24rem] sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl">
                  Spread the Sweetness
                </button>
              </NavLink>
            </div>
          </div>
    
  )
}

export default Hero
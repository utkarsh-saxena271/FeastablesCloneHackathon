import React, { useEffect, useRef, useState } from 'react';
import logo from '../assets/logo.avif';
import { HiMenu, HiX } from 'react-icons/hi';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Nav = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const linkref = useRef([]);
  const link2ref = useRef(null);
  const imgref = useRef(null);

  useGSAP(() => {
    gsap.from(imgref.current, {
      scale: 0.2,
      opacity: 0,
      duration: 0.7,
      delay: 0.2,
      ease: 'cubic-bezier(0.19, 1, 0.22, 1)',
    });
    gsap.from(linkref.current, {
      y: 30,
      opacity: 0,
      duration: 0.7,
      stagger: 0.2,
      delay: 0.2,
      ease: 'cubic-bezier(0.19, 1, 0.22, 1)',
    });
    gsap.from(link2ref.current, {
      y: 30,
      opacity: 0,
      duration: 0.7,
      delay: 1,
      ease: 'cubic-bezier(0.19, 1, 0.22, 1)',
    });
  });

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { href: '#hero', label: 'Home' },
    { href: '#products', label: 'Products' },
    { href: '#ourstory', label: 'About' },
  ];

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full bg-feastblue/95 transition-transform duration-300 border-b-4 border-b-feastdark ${
        showNav ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex items-center justify-between w-full h-[5rem] px-6 md:px-10">
        {/* Logo */}
        <a href="#home" className="h-full flex items-center">
          <img src={logo} alt="Feastables Logo" className="h-[90%]" ref={imgref} />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-between w-[60%]">
          <div className="flex items-center gap-10">
            {navItems.map(({ href, label }, index) => (
              <a
                key={href}
                href={href}
                className="relative text-xl font-extrabold uppercase italic text-feastdark font-family-poppins group hover:scale-105"
                ref={(el) => (linkref.current[index] = el)}
              >
                {label}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-feastdark transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Hamburger Icon */}
        <div
          className="md:hidden text-feastdark text-3xl cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col bg-feastblue px-6 pb-4 pt-2">
          {navItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="relative group py-2 text-lg font-semibold uppercase italic text-feastdark"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-feastdark transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Nav;
import React from "react";
import logo from "../assets/logo.avif";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full  bg-feastdark text-white px-6 md:px-20 py-12 border-t-10 rounded-3xl border-t-feastwhite">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        {/* Brand & Description */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <img
              src={logo}
              alt="Feastables Logo"
              className="w-20 object-contain"
            />
            <span className="text-2xl font-bold font-family-bangers italic">
              Feastables
            </span>
          </div>
          <p className="text-sm text-gray-300 mb-4 max-w-sm">
            Official merch and munch store of MrBeast — quality snacks that tell a story.
          </p>
          <div className="flex gap-4 text-xl text-gray-400">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#hero" className="hover:underline">Home</a></li>
            <li><a href="#products" className="hover:underline">Shop</a></li>
            <li><a href="#ourstory" className="hover:underline">Our Story</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4">Contact & Support</h3>
          <p className="text-sm text-gray-300 mb-2">
            Email: <a href="mailto:hello@feastables.com" className="hover:underline">hello@feastables.com</a>
          </p>
          <p className="text-sm text-gray-300">
            Address: Feastables HQ, Raleigh, NC, USA
          </p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 pt-6 border-t border-gray-700 text-sm text-center text-gray-400">
        &copy; {new Date().getFullYear()} Feastables. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
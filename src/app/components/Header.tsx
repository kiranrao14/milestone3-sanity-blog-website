'use client'
import Image from "next/image";
import Link from "next/link";
import { FaHome, FaUserAlt, FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);  
  };

  return (
    <div className="w-full h-20 border-b-[1px] border-b-black font-titleFont sticky top-0 bg-gray-300 z-50 px-4">
      <div className="max-w-7xl h-full mx-auto flex justify-between items-center">
        <Link href="/">
          <div>
            <Image width={80} height={80} src="/images/logoDark.png" alt="logoDark" />
          </div>
        </Link>
        
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>

        
        <div className="hidden md:flex gap-8 uppercase text-sm font-semibold">

          <Link href="/">
            <li className="headerLi flex items-center gap-2">
              <FaHome className="text-xl" />
              Home
            </li>
          </Link>

          
          <Link href="/About">
            <li className="headerLi flex items-center gap-2">
              <FaUserAlt className="text-xl" />
              About
            </li>
          </Link>

          
          <Link href="/Contact">
            <li className="headerLi flex items-center gap-2">
              <FaPhoneAlt className="text-xl" />
              Contact
            </li>
          </Link>
        </div>

      
        <div
          className={`md:hidden fixed top-20 left-0 w-full bg-gray-300 p-6 ${isMenuOpen ? "block" : "hidden"}`}
        >
          <ul className="flex flex-col gap-6">
            <Link href="/">
              <li className="flex items-center gap-2">
                <FaHome className="text-xl" />
                Home
              </li>
            </Link>
            <Link href="/About">
              <li className="flex items-center gap-2">
                <FaUserAlt className="text-xl" />
                About
              </li>
            </Link>
            <Link href="/Contact">
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-xl" />
                Contact
              </li>
            </Link>
          </ul>
        </div>

        <button className="uppercase text-sm border-[1px] border-primaryColor hover:border-secondaryColor px-4 py-1 font-semibold hover:text-white rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-yellow-600">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Header;

"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBowlFood, faXmark } from "@fortawesome/free-solid-svg-icons";
import '@fortawesome/fontawesome-svg-core/styles.css';


const Navbar = () => {
  const [toggleDropdown, setToggleDropDown] = useState(false);

  return (
    <div className="flex gap-5 fixed mb-12 p-3 justify-between bg-black w-full z-20 top-0">
      <div>
        <Link href="/" className="flex gap-3 ml-4 items-center">
          <FontAwesomeIcon icon={faBowlFood} className="text-4xl text-yellow-500"/>
          <span className="text-yellow-500 text-xl pt-1">Maluda's Jollof</span>
        </Link>
      </div>
      {/* <!-- Desktop Navigation --> */}
      <div className="hidden sm:flex gap-4 text-lg pt-2 text-yellow-500 text-center justify-end">
       <Link href="/" className="hover:underline">Home</Link>
        <Link href="/menu" className="hover:underline">Menu</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/blog" className="hover:underline">Blog</Link>
        </div>
      {/* <!-- Mobile Navigation --> */}
      <div className="flex gap-3 sm:hidden">
         <FontAwesomeIcon
            icon={toggleDropdown ? faXmark : faBars}
            className="hover:cursor-pointer text-2xl text-yellow-500 p-1 mt-1"
            onClick={() => {
                setToggleDropDown(!toggleDropdown);
              }}
        />
        {toggleDropdown && (
          <div className="dropdown">
            <Link href="/" className="relative inline-block" onClick={() => setToggleDropDown(!toggleDropdown)}>
              <span className="transition duration-300 ease-in-out group-hover:underline-offset-8 hover:underline hover:cursor-pointer">
                Home
              </span>
            </Link>

            <Link href="/menu" className="relative inline-block" onClick={() => setToggleDropDown(!toggleDropdown)}>
              <span className="transition duration-300 ease-in-out group-hover:underline-offset-8 hover:underline hover:cursor-pointer">
                Menu
              </span>
            </Link>

            <Link href="/about" className="relative inline-block" onClick={() => setToggleDropDown(!toggleDropdown)}>
              <span className="transition duration-300 ease-in-out group-hover:underline-offset-8 hover:underline hover:cursor-pointer">
                About
              </span>
            </Link>

            <Link href="/blog" className="relative inline-block" onClick={() => setToggleDropDown(!toggleDropdown)}>
              <span className="transition duration-300 ease-in-out group-hover:underline-offset-8 hover:underline hover:cursor-pointer">
                Blog
              </span>
            </Link>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default Navbar;

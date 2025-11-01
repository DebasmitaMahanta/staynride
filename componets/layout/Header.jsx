"use client";

import Link from "next/link";
import { PhoneCall, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <nav className="flex items-center justify-between">
       
        <div className="flex items-center bg-blue-900 text-white px-6 py-3 rounded-tr-[60px]">
          <Link href="/" className="flex flex-col items-start leading-tight">
            <h1 className="text-2xl font-extrabold tracking-wide">
              Stay<span className="text-yellow-400">NRide</span>
            </h1>
            <p className="text-[10px] text-gray-200 uppercase tracking-wider">
              Adventure & Comfort
            </p>
          </Link>

        
          <div className="hidden sm:flex flex-col items-center ml-4">
            <div className="bg-yellow-400 p-2 rounded-full shadow-md">
              <PhoneCall size={18} className="text-blue-900" />
            </div>
            <span className="text-[11px] text-white mt-1 font-medium">
              Women Safety
            </span>
          </div>
        </div>

       
        <div className="hidden md:flex items-center gap-8 pr-8">
          {[
            ["Home", "/"],
            ["About Us", "/about"],
            ["Gallery", "/gallery"],
            ["Hostels", "/hostels"],
            ["Contact Us", "/contact"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="relative text-gray-700 font-medium hover:text-blue-900 transition group"
            >
              {label}
              <span className="absolute bottom-0 left-0 w-0  bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          <Link href="/login">
            <button className="px-6 py-2 bg-yellow-400 rounded-md text-gray-900 font-semibold hover:bg-yellow-500 cursor-pointer transition">
              Login / Register
            </button>
          </Link>
        </div>

        
        <button
          className="md:hidden text-gray-700 pr-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

     
      {isOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-6 flex flex-col gap-4">
          {[
            ["Home", "/"],
            ["About Us", "/about"],
            ["Gallery", "/gallery"],
            ["Hostels", "/hostels"],
            ["Contact Us", "/contact"],
          ].map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-gray-700 hover:text-blue-900"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}

          <Link href="/login" onClick={() => setIsOpen(false)}>
            <button className="w-full px-6 py-2 bg-yellow-400 rounded-md text-gray-900 font-semibold hover:bg-yellow-500 cursor-pointer transition">
              Login / Register
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}

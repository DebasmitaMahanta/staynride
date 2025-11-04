"use client";

import Link from "next/link";
import { PhoneCall, Menu, X, User } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../context/authContent";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const { user, logout } = useAuth();

  return (
    <header className="fixed w-full backdrop-blur-md shadow-sm z-50 border-b border-white/20">
      <nav className="flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center bg-[#1E3A8A] backdrop-blur-lg border border-white/20 text-white px-5 py-3 rounded-tr-[50px] shadow-md">
          <Link href="/" className="flex flex-col items-start leading-tight">
            <h1 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold tracking-wide font-heading">
              Stay<span className="text-yellow-400">NRide</span>
            </h1>
            <p className="text-[10px] sm:text-[11px] md:text-[12px] text-gray-100 uppercase tracking-[0.15em] mt-1 font-body">
              Adventure & Comfort
            </p>
          </Link>

          <div className="hidden sm:flex flex-col items-center ml-3">
            <div className="bg-yellow-400 p-2 rounded-full shadow-md">
              <PhoneCall size={16} className="text-blue-900" />
            </div>
            <span className="text-[10px] text-white mt-1 font-medium font-body">
              Women Safety
            </span>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 pr-4">
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
              className="relative text-white font-medium text-[14px] hover:text-yellow-300 transition group"
            >
              {label}
            </Link>
          ))}

          {/* If logged in, show profile dropdown */}
          {user ? (
            <div
              className="relative"
              onClick={() => setShowProfile(true)}
            >
              <button className="flex items-center gap-2 px-4 py-2 bg-yellow-400 rounded-md text-gray-900 font-semibold hover:bg-yellow-500 transition">
                <User size={18} /> {user?.name || "Profile"}
              </button>

              {showProfile && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  <div className="p-3 border-b border-gray-200 text-sm text-gray-700">
                    <p>{user?.email}</p>
                  </div>
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-100 hover:text-red-600 rounded-b-lg"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link href="/login">
              <button className="px-4 py-2 bg-yellow-400 rounded-md text-gray-900 font-semibold hover:bg-yellow-500 transition whitespace-nowrap">
                Login / Register
              </button>
            </Link>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden text-white pr-2 sm:pr-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* MOBILE NAVIGATION */}
      {isOpen && (
        <div className="lg:hidden bg-white/90 backdrop-blur-md border-t border-white/20 shadow-md py-4 px-6 flex flex-col gap-4">
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
              className="text-gray-700 hover:text-blue-900 transition"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}

          {user ? (
            <>
              <div className="text-gray-700 font-medium">{user?.email}</div>
              <button
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className="w-full px-6 py-2 bg-red-100 rounded-md text-red-600 font-semibold hover:bg-red-200 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" onClick={() => setIsOpen(false)}>
              <button className="w-full px-6 py-2 bg-yellow-400 rounded-md text-gray-900 font-semibold hover:bg-yellow-500 transition">
                Login / Register
              </button>
            </Link>
          )}
        </div>
      )}
    </header>
  );
}

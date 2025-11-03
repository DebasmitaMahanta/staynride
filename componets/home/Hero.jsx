"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, PhoneCall, X } from "lucide-react";
import SearchBar from "./SearchBar";
import { FiPhoneCall } from "react-icons/fi";

const images = ["/images/stay1.png", "/images/stay2.png", "/images/stay1.png"];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [showContact, setShowContact] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowContact(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="relative flex flex-col md:flex-row items-stretch min-h-[90vh] overflow-hidden ">
     
    
      <div className="w-full md:w-1/2 bg-[#1E3A8A] text-white px-6 sm:px-10 md:px-14 lg:px-16 py-16 sm:py-20 flex flex-col justify-center text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
          Find Your <br className="hidden sm:block" /> Perfect Stay
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-6 sm:mb-8 text-gray-100 leading-relaxed">
          Affordable, comfortable, and unique hostels waiting for you. Book now and start your adventure!
        </p>
        <div className="mx-auto md:mx-0 w-full sm:w-[90%] md:w-[80%] lg:w-[70%]">
          <SearchBar />
        </div>
       
      </div>

    
      <div className="w-full md:w-1/2 relative flex justify-center items-center bg-gray-100">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

       
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-1.5 sm:p-2 shadow-md"
        >
          <ChevronLeft className="text-gray-700 w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-1.5 sm:p-2 shadow-md"
        >
          <ChevronRight className="text-gray-700 w-5 h-5 sm:w-6 sm:h-6" />
        </button>

      
        <div
          className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 flex flex-col items-center cursor-pointer"
          onClick={() => setShowContact(!showContact)}
          ref={popupRef}
        >
          <div className="bg-yellow-400 p-2 sm:p-3 rounded-full shadow-md hover:bg-yellow-300 transition">
            <PhoneCall size={18} className="text-blue-900" />
          </div>
          <span className="text-[10px] sm:text-[11px] text-white mt-1 font-medium font-body">
            Women Safety
          </span>

         
          {showContact && (
            <div className="absolute bottom-14 right-0 bg-white text-gray-800 rounded-lg shadow-lg px-4 py-2 text-sm w-44 sm:w-52 animate-fade-in">
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-blue-900">Helpline:</span>
                <button
                  onClick={() => setShowContact(false)}
                  className="text-gray-600 hover:text-red-500"
                >
                  <X size={14} />
                </button>
              </div>
              <p className="text-gray-700 font-medium flex items-center gap-2">
  <FiPhoneCall className="text-blue-900" /> +91 1091 (24x7)
</p>
              <p className="text-gray-600 text-xs mt-1">National Women Helpline</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

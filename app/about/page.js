"use client";

import Image from "next/image";
import { Building2, DollarSign, BookOpen, Users2 } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="bg-white  md:px-12 lg:px-24">
      <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
        
       
        <div className="relative sm:h-[400px] md:h-[500px]  overflow-hidden shadow-lg">
          <Image
            src="/images/stay1.png"
            alt="Travelers talking in a cozy hostel room"
            fill
            className="object-cover"
            priority
          />
        </div>

       
         <div>
          <h3 className="text-[#1e3a8a] font-semibold text-base ">
            Let’s Go Together
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1e3a8a]  leading-tight">
            About Us
          </h2>
          <p className="text-gray-800 text-sm leading-relaxed mb-10 max-w-xl">
            Our team is passionate about helping solo travelers from all around the
            world find unique, affordable and safe hostels to stay. We prioritize
            women’s safety and comfort, offering handpicked stays that feel like
            home and add unforgettable experiences to your journey.
          </p>

         
          <div className="space-y-2">
            <div className="flex items-start gap-4">
              <div className="bg-white shadow-md rounded-full p-4 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-[#1e3a8a]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  Handpicked Hostels
                </h3>
                <p className="text-gray-700 text-sm leading-snug">
                  Only the best hostels make it to our platform—each one selected for its comfort, value, and authenticity.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white shadow-md rounded-full p-4 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-[#1e3a8a]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Affordable</h3>
                <p className="text-gray-700 text-sm leading-snug">
                  We’re committed to offering the best prices without compromising on quality.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white shadow-md rounded-full p-4 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-[#1e3a8a]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Easy Booking</h3>
                <p className="text-gray-700 text-sm leading-snug">
                  Find, compare, and book your perfect stay in just a few clicks.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white shadow-md rounded-full p-4 flex items-center justify-center">
                <Users2 className="w-6 h-6 text-[#1e3a8a]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">Community Focused</h3>
                <p className="text-gray-700 text-sm leading-snug">
                  We’re more than just a booking site—we’re a community of like-minded travelers who share a love for adventure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}

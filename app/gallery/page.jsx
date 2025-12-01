"use client";
import Image from "next/image";

export default function HostelGallery() {
  return (
    <section className="py-16 bg-white">
     <div className="text-center max-w-3xl mx-auto">
        <p className="text-gray-700 text-lg md:text-xl font-medium">
          Explore photos from our top-rated hostels around the world.
        </p>
        <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mt-2">
          Get a Glimpse of Your Next Stay
        </h2>
      </div>
  <div className="mt-16 grid grid-cols-5 gap-2 justify-items-center items-center lg:px-20">
      <div className="col-start-2 col-span-1 w-40 md:w-48 h-[140px] rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/images/gallery1.png"
            alt="Top Left Small"
            width={200}
            height={150}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="col-start-4 col-span-1 w-40 md:w-48 h-[140px] rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/images/gallery2.png"
            alt="Top Right Small"
            width={200}
            height={150}
            className="object-cover w-full h-full"
            priority
          />
        </div>

       
        <div className="col-start-1 col-span-1 w-44 md:w-56 rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/images/gallery3.png"
            alt="Left Small"
            width={220}
            height={160}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <div className="col-start-3 col-span-1 w-72 md:w-96 h-[300px] rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/images/gallery.png"
            alt="Large Center"
            width={400}
            height={300}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <div className="col-start-5 col-span-1 w-44 md:w-56  rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/images/gallery3.png"
            alt="Right Small"
            width={220}
            height={160}
            className="object-cover w-full h-full"
            priority
          />
        </div>

       
        <div className="col-start-2 col-span-1 w-40 md:w-48 h-[140px] rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/images/gallery2.png"
            alt="Bottom Left Small"
            width={200}
            height={150}
            className="object-cover w-full h-full"
            priority
          />
        </div>
        <div className="col-start-4 col-span-1 w-40 md:w-48 h-[140px] rounded-2xl overflow-hidden shadow-md">
          <Image
            src="/images/gallery1.png"
            alt="Bottom Right Small"
            width={200}
            height={150}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}

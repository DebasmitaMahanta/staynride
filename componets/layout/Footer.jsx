import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#0D47A1] text-white py-10 px-6 sm:px-10 lg:px-20 rounded-t-[60px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
        
       
        <div>
          <Link href="/" className="block leading-tight mb-6">
            <h1 className="text-[24px] sm:text-[26px] lg:text-[28px] font-bold tracking-wide font-heading">
              Stay<span className="text-yellow-400">NRide</span>
            </h1>
            <p className="text-[12px] md:text-[13px] text-gray-200 uppercase tracking-[0.12em] mt-1 font-body">
              Adventure & Comfort
            </p>
          </Link>
          <p className="text-gray-100 leading-relaxed text-[16px] md:text-[17px] max-w-sm">
            Discover comfort, safety, and adventure together.  
            StayNRide connects travelers with authentic stays —  
            where every trip feels like home.
          </p>
        </div>

       
        <div>
          <h3 className="text-[20px] sm:text-[22px] font-semibold mb-5">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-100 text-[16px] md:text-[17px]">
            {["Home", "About Us", "Gallery", "Our Team", "Hostels", "Contact Us"].map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="hover:text-yellow-400 transition-colors duration-200"
                >
                  • {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

       
        <div>
          <h3 className="text-[20px] sm:text-[22px] font-semibold mb-5">
            Contact Us
          </h3>
          <ul className="space-y-4 text-gray-100 text-[16px] md:text-[17px]">
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-yellow-400" />
              <span>+91 78645 78345</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-yellow-400" />
              <span>example@gmail.com</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-yellow-400 mt-[3px]" />
              <span>
                Backpacker’s Paradise<br />
                123, MG Road, Connaught Place,<br />
                New Delhi, Delhi 110001, India
              </span>
            </li>
          </ul>
        </div>

        {/* ---------- Social Section ---------- */}
        <div>
          <h3 className="text-[20px] sm:text-[22px] font-semibold mb-5">
            Join Our Community
          </h3>
          <p className="text-gray-100 mb-6 text-[16px] leading-relaxed">
            Stay connected with us and be part of our vibrant travel community!
          </p>
          <div className="flex gap-4">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="bg-white/10 border border-white/20 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-yellow-400 hover:text-blue-900 transition-all duration-300 shadow-md"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

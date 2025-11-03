import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12 px-6 md:px-16 rounded-tl-[60px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

       
        <div>
          <div className="flex items-center mb-4">
            <Link href="/" className="flex flex-col items-start leading-tight">
              <h1 className="text-3xl font-extrabold tracking-wide">
                Stay<span className="text-yellow-400">NRide</span>
              </h1>
              <p className="text-[11px] text-gray-200 uppercase tracking-wider">
                Adventure & Comfort
              </p>
            </Link>
          </div>
          <p className="text-gray-200 leading-relaxed">
            At StayNRide, we believe in creating an atmosphere where travelers can
            connect, explore, and relax. Our mission is to provide a welcoming space
            that feels like home — combining adventure and comfort for every guest.
          </p>
        </div>

       
        <div>
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            {["Home", "About Us", "Gallery", "Our Team", "Hostels", "Contact Us"].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-yellow-400 transition">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

      
        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-gray-200">
            <li className="flex items-center gap-3">
              <Phone size={18} /> <span>7864578345</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} /> <span>example@gmail.com</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} />
              <span>
                Backpacker’s Paradise<br />
                123, MG Road, Connaught Place,<br />
                New Delhi, Delhi 110001, India
              </span>
            </li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-2xl font-semibold mb-4">Become a part</h3>
          <p className="text-gray-200 mb-6">
            Stay connected with us and be part of our vibrant travel community!
          </p>

         
          <div className="flex gap-5">
            {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="bg-white text-blue-900 w-10 h-10 flex items-center justify-center rounded-full hover:bg-yellow-400 hover:text-white transition"
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

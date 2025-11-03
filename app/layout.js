import { Playfair_Display, Playfair_Display_SC } from "next/font/google";
import "./globals.css";
import Header from "@/componets/layout/Header";
import Footer from "@/componets/layout/Footer";


const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});


const playfairSC = Playfair_Display_SC({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "700", "900"], 
});

export const metadata = {
  title: "Stay'nRide - Find Your Perfect Hostel",
  description: "Affordable, comfortable, and unique hostels waiting for you",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${playfairSC.variable} antialiased font-body`}
      >
         <Header />
         <main className="flex-1 pt-16 md:pt-20 pb-12 md:pb-16">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}

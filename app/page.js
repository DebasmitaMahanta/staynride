
import Hero from '@/componets/home/Hero';
import Header from '@/componets/layout/Header';

import Footer from '@/componets/layout/Footer';
import AboutUs from './about/page';
import { AuthProvider } from '@/componets/context/authContent';



export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutUs />
    </main>
  );
}
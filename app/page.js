
import Hero from '@/componets/home/Hero';
import Header from '@/componets/layout/Header';
import AboutPage from './about/page';
import Footer from '@/componets/layout/Footer';


export default function Home() {
  return (
    <main className="min-h-screen bg-blue-900">
      <Header />
      <Hero />
      <AboutPage />
      <Footer/>
    </main>
  );
}
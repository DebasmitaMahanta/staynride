import Header from '@/componets/layout/Header';
import Image from 'next/image';


const features = [
  {
    title: "Handpicked Hostels",
    description: "Only the best hostels make it to our platform—each one selected for its comfort, value, and authenticity.",
    icon: "🏨"
  },
  {
    title: "Affordable",
    description: "We're committed to offering the best prices without compromising on quality.",
    icon: "💰"
  },
  {
    title: "Easy Booking",
    description: "Find, compare, and book your perfect stay in just a few clicks.",
    icon: "✨"
  },
  {
    title: "Community Focused",
    description: "We're more than just a booking site—we're a community of like-minded travelers who share a love for adventure.",
    icon: "👥"
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl text-blue-900 font-bold mb-2">Let's Go Together</h1>
          <h2 className="text-5xl font-bold text-gray-900 mb-8">About Us</h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
            Our team is passionate about helping solotravelers from all around the 
            world find unique, affordable and safe hostels to stay. We prioritize 
            women's safety and comfort, offering handpicked stays that feel like 
            home and add unforgettable experiences to your journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <Image
              src="/images/about-hero.jpg"
              alt="Travelers at hostel"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-1 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
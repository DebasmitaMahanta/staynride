import SearchBar from './SearchBar';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20">
      <div className="absolute inset-0 bg-[url('/images/stay1.png')] bg-cover bg-center opacity-20" />
      <div className="relative container mx-auto px-4 py-32 text-center">
        <h1 className="text-6xl font-bold mb-6 text-white">
          Find Your Perfect Stay
        </h1>
        <p className="text-xl mb-12 max-w-2xl mx-auto text-white">
          Affordable, comfortable, and unique hostels waiting for you. Book now and start your adventure!
        </p>
        <SearchBar />
      </div>
    </section>
  );
}
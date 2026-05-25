import Navbar from "./Navbar";

function Hero() {
  return (
    <section className="relative min-h-screen bg-[#020617] overflow-hidden">

      <Navbar />

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] bg-blue-600 opacity-30 blur-[180px] rounded-full"></div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#020617]/60 z-10"></div>

      {/* BACKGROUND IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1974&auto=format&fit=crop"
        alt="truck"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* DARK GRADIENT OVER IMAGE */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/80 to-transparent z-10"></div>

      {/* CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-8 lg:px-16 min-h-screen flex items-center">

        <div className="max-w-3xl">

          <p className="text-blue-400 uppercase tracking-[5px] mb-4">
            One Stop Solution
          </p>

          <h1 className="text-6xl md:text-7xl font-black leading-tight text-white">
            Transport & <br />
            Logistics Solution <br />
            Powered By <span className="text-blue-500">Technology</span>
          </h1>

          <p className="mt-8 text-gray-300 text-lg leading-8">
            We combine logistics expertise with advanced technology
            to deliver smarter, faster and more reliable digital
            solutions for businesses.
          </p>

          <div className="flex gap-5 mt-10">
            <button className="bg-blue-600 hover:bg-blue-500 transition px-8 py-4 rounded-xl text-white font-semibold">
              Explore Services
            </button>

            <button className="border border-white/20 hover:border-blue-500 transition px-8 py-4 rounded-xl text-white font-semibold backdrop-blur-md">
              Learn More
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
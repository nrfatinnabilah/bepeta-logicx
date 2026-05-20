const Hero = () => {
    return (
        <section className="h-screen flex items-center justify-center text-center px-6 bg-gradient-to-b from-[#020617] to-[#0f172a]">
            <div>
                <h1 className="text-6xl md:text-8xl font-black leading-tight">
                    Smart Logistics
                    <br />
                    <span className="text-blue-500">
                        Powered by Technology
                    </span>
                </h1>

                <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
                    Building the future of logistics with AI, automation,
                    and intellignet supply chain solutions.
                </p>

                <div className="mt-10 flex gap-6 justify-center">
                    <button className="bg-blue-600 px-8 py-4 rounded-full text-lg hover:bg-blue-500 transition">
                        Get Started 
                    </button>

                    <button className="border border-blue-500 px-8 py-4 rounded-full text-lg hover:bg-blue-500/10 transition">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
const services = [
  {
    title: "Smart Logistics",
    desc: "AI-powered delivery optimization and automation."
  },
  {
    title: "Supply Chain",
    desc: "End-to-end logistics and warehouse management."
  },
  {
    title: "Technology Platform",
    desc: "Cloud-based logistics infrastructure."
  },
  {
    title: "Analytics",
    desc: "Real-time tracking and predictive insights."
  }
];

const Services = () => {
  return (
    <section className="py-24 px-10 bg-[#0f172a]">
      
      <h2 className="text-5xl font-bold text-center mb-16">
        Our Services
      </h2>

      <div className="grid md:grid-cols-4 gap-8">
        
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#111827] p-8 rounded-3xl border border-blue-500/20 hover:border-blue-500 transition"
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-400">
              {service.title}
            </h3>

            <p className="text-gray-300">
              {service.desc}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
};

export default Services;
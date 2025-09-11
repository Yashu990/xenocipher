import React from "react";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <div className="bg-blue-950 text-white font-sans">
      {/* Hero Section */}
      <section className="relative py-32 text-center bg-gradient-to-b from-darkBg to-darkBg/70">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-600/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-6xl font-bold mb-6">About Xenocipher</h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Pioneering the future of security technology with innovation,
            precision, and trust.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="p-10 rounded-3xl bg-gradient-to-b from-darkBg/80 to-darkBg/60 border border-cyan-400/30 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-400/20 transition-all duration-300">
            <h2 className="text-4xl font-bold text-cyan-400 mb-6">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              To deliver cutting-edge security solutions that safeguard
              individuals, organizations, and public spaces — ensuring safety and
              peace of mind worldwide.
            </p>
          </div>

          {/* Vision */}
          <div className="p-10 rounded-3xl bg-gradient-to-b from-darkBg/80 to-darkBg/60 border border-cyan-400/30 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-400/20 transition-all duration-300">
            <h2 className="text-4xl font-bold text-cyan-400 mb-6">Our Vision</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              To be the global leader in advanced security technology — creating
              safer environments through continuous innovation and customer-first
              solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gradient-to-b from-darkBg/70 to-darkBg">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-10 cursor-pointer ">
            {[
              {
                icon: "⚡",
                title: "Innovation",
                desc: "Constantly pushing boundaries with next-gen security solutions.",
              },
              {
                icon: "🛡️",
                title: "Trust",
                desc: "Reliable products trusted by governments, airports, and institutions.",
              },
              {
                icon: "🤝",
                title: "Commitment",
                desc: "Dedicated to supporting our customers with 24/7 assistance.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-10 rounded-3xl bg-gradient-to-b from-slate-800/80 to-slate-800/60 border border-cyan-400/30 hover:border-cyan-400  hover:shadow-2xl hover:shadow-cyan-400/20 transition-all duration-300"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-4xl shadow-lg shadow-cyan-400/40">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-16">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[1, 2, 3, 4].map((member) => (
              <div
                key={member}
                className="bg-gradient-to-b from-slate-800/80 to-slate-800/60 p-6 rounded-2xl border border-cyan-400/30 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-400/20 transition-all duration-300 cursor-pointer"
              >
                <img
                  src={`https://randomuser.me/api/portraits/men/${member + 20}.jpg`}
                  alt="Team Member"
                  className="w-28 h-28 mx-auto rounded-full object-cover mb-4 border-4 border-cyan-400/30 cursor-pointer"
                />
                <h3 className="text-xl font-bold">John Doe</h3>
                <p className="text-gray-400 text-sm">Security Specialist</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24  bg-gradient-to-r from-blue-600/40 to-sky-500/20 border-y border-cyan-400/30 text-center">
        <h2 className="text-4xl  font-bold mb-6 cursor-pointer">
          Ready to Work with Xenocipher?
        </h2>
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
          Get in touch with our experts today and take your security to the next
          level.
        </p>
        <button className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 shadow-lg shadow-cyan-400/30 text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/50 active:scale-95">
          <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-10 transition-opacity "></span>
          <i className="fas fa-envelope text-xl cursor-pointer"></i>
          <span>Contact Us</span>
        </button>
      </section>
      <Footer/>
    </div>
  );
};

export default AboutUs;

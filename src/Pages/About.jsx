import React from 'react';

const About = () => {
  return (
    <div className="bg-white min-h-screen text-gray-800 antialiased">
      {/* 1. Main Hero Banner Section */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-950 to-purple-900 text-white py-20 px-6 text-center shadow-inner">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide uppercase mb-4 drop-shadow-sm">
          About Trendyfy
        </h1>
        <p className="text-base md:text-lg text-indigo-200 max-w-2xl mx-auto font-medium leading-relaxed">
          Where Trend Meets Elegance. Discover premium collections curated exclusively for your royal comfort and style.
        </p>
      </div>

      {/* 2. Our Journey Section */}
      <section className="max-w-[1100px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wider mb-4 border-b-2 border-indigo-600 pb-2 inline-block">
            Our Journey
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base">
            Welcome to <span className="font-bold text-indigo-600">Trendyfy</span>, your ultimate premium fashion destination. We bring you the finest global trends curated by fashion experts, delivered straight to your doorstep. From heritage silk sarees to modern streetwear, our mission is to make every outfit feel royal.
          </p>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            We started with a simple vision: to bridge the gap between traditional craftsmanship and modern digital shopping. Today, Trendyfy operates as a cutting-edge, online-only platform engineered for speed, security, and a seamless customer experience.
          </p>
        </div>
        
        {/* Value Proposition Box */}
        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-center h-full">
          <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide mb-5 text-center">
            Trendyfy Promise
          </h3>
          <ul className="space-y-4 text-sm text-gray-600">
            <li className="flex items-center gap-3">
              <span className="text-indigo-600 font-bold bg-indigo-50 w-5 h-5 flex items-center justify-center rounded-full text-xs">✓</span> 
              <span>100% Secure Encrypted Shopping</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-indigo-600 font-bold bg-indigo-50 w-5 h-5 flex items-center justify-center rounded-full text-xs">✓</span> 
              <span>Premium Quality Handpicked Fabrics</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-indigo-600 font-bold bg-indigo-50 w-5 h-5 flex items-center justify-center rounded-full text-xs">✓</span> 
              <span>Fast Express Global Delivery</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-indigo-600 font-bold bg-indigo-50 w-5 h-5 flex items-center justify-center rounded-full text-xs">✓</span> 
              <span>Seamless Returns & Customer Support</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 3. Tech Stack & Engineering Architecture */}
      <section className="bg-gray-50 py-16 px-6 border-t border-b border-gray-100">
        <div className="max-w-[1100px] mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wider mb-10">
            Our Tech Stack & Architecture
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200/60 shadow-sm transition-transform duration-200 hover:-translate-y-1">
              <h3 className="font-bold text-indigo-600 text-base mb-1">React & Vite</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Blazing fast frontend rendering & optimized bundles.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200/60 shadow-sm transition-transform duration-200 hover:-translate-y-1">
              <h3 className="font-bold text-indigo-600 text-base mb-1">Spring Boot</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Robust REST APIs and scalable backend architecture.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200/60 shadow-sm transition-transform duration-200 hover:-translate-y-1">
              <h3 className="font-bold text-indigo-600 text-base mb-1">Spring Security</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Secure stateless authentication powered by JWT tokens.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200/60 shadow-sm transition-transform duration-200 hover:-translate-y-1">
              <h3 className="font-bold text-indigo-600 text-base mb-1">Redux State</h3>
              <p className="text-xs text-gray-500 leading-relaxed">Centralized and predictable data flow management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Founder / Developer Section */}
      <section className="max-w-[1100px] mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wider mb-3">
          Behind The Platform
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-8 text-xs md:text-sm">
          Trendyfy is engineered and developed with precision to deliver a top-tier digital commerce experience.
        </p>
        <div className="inline-flex flex-col items-center">
          <div className="w-20 h-20 bg-gradient-to-tr from-indigo-600 to-indigo-700 text-white rounded-full flex items-center justify-center font-black text-3xl shadow-md uppercase tracking-wider mb-4 border-4 border-white ring-2 ring-indigo-100">
            A
          </div>
          <h3 className="font-bold text-gray-900 text-lg tracking-wide">Ashish</h3>
          <p className="text-xs text-indigo-600 font-bold uppercase tracking-widest mt-1">
            Full-Stack Software Engineer
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;

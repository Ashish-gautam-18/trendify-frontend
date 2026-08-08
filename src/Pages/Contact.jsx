import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Action trigger to sink message query data with backend APIs
    console.log("Contact Queries Submitted: ", formData);
    alert("Thank you! Your message has been received. We will get back to you shortly.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-white min-h-screen text-gray-800 antialiased">
      {/* 1. Main Hero Header Banner Section */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-950 to-purple-900 text-white py-16 px-6 text-center shadow-inner">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide uppercase mb-3 drop-shadow-sm">
          Contact Us
        </h1>
        <p className="text-base md:text-lg text-indigo-200 max-w-xl mx-auto font-medium leading-relaxed">
          Have a question or need assistance with your order? Our support team is here to help you 24/7.
        </p>
      </div>

      {/* 2. Content Info & Form Framework */}
      <section className="max-w-[1100px] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Side: Business Touchpoints */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wider mb-4 border-b-2 border-indigo-600 pb-2 inline-block">
              Get In Touch
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Feel free to reach out to us for bulk orders, customized fashion queries, tracking issues, or business partnerships. Fill out the form, and our customer relations executive will respond within 12–24 hours.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="text-indigo-600 font-bold bg-indigo-50 w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0">📍</span>
              <div>
                <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide">Corporate Head Office</h3>
                <p className="text-gray-600 text-sm mt-0.5">Trendyfy Digital Commerce Tower, Tech Zone, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-indigo-600 font-bold bg-indigo-50 w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0">✉️</span>
              <div>
                <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide">Email Support</h3>
                <p className="text-indigo-600 text-sm mt-0.5 font-medium hover:underline cursor-pointer">support@trendyfy.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-indigo-600 font-bold bg-indigo-50 w-8 h-8 flex items-center justify-center rounded-full flex-shrink-0">📞</span>
              <div>
                <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide">Hotline Assistance</h3>
                <p className="text-gray-600 text-sm mt-0.5">+91 1800-XXX-XXXX (Toll Free)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Support Form Panel */}
        <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide mb-6">
            Send A Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1 tracking-wider">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1 tracking-wider">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="johndoe@example.com"
                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1 tracking-wider">Subject</label>
              <input
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Order Query / Partnership"
                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-1 tracking-wider">Message Description</label>
              <textarea
                name="message"
                required
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your issue or question in detail..."
                className="w-full bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg text-sm tracking-wide uppercase shadow-md transition-colors duration-200 mt-2"
            >
              Submit Query
            </button>
          </form>
        </div>

      </section>
    </div>
  );
};

export default Contact;

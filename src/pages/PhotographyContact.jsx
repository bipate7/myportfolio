import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Mail, Phone, MapPin, Send, Calendar, Users, DollarSign, Star } from 'lucide-react';

const PhotographyContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: 'portrait',
    date: '',
    location: '',
    message: '',
    budget: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your photography inquiry! I will get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: 'portrait',
        date: '',
        location: '',
        message: '',
        budget: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const photographyServices = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Portrait Sessions",
      description: "Professional portraits in natural or studio lighting",
      price: "Starting from ₹3,000"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Event Photography",
      description: "Weddings, birthdays, corporate events, and more",
      price: "Starting from ₹5,000"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location Shoots",
      description: "Outdoor photography at scenic locations",
      price: "Starting from ₹4,000"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Commercial Photography",
      description: "Product, food, and business photography",
      price: "Starting from ₹7,000"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 to-orange-900/20"></div>
        
        <motion.div 
          className="max-w-7xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Book a <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">Photoshoot</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Let's capture your special moments through my lens. From intimate portraits to grand celebrations, 
            every story deserves to be told beautifully.
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {["Portraits", "Events", "Commercial", "Travel"].map((tag, index) => (
              <motion.span
                key={tag}
                className="px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-yellow-600 hover:to-orange-600 hover:border-transparent hover:text-white transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-neutral-900/50">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Photography <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">Services</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {photographyServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 hover:border-yellow-500/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className="flex justify-center mb-4 text-yellow-400">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral-400 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="text-yellow-400 font-bold">
                  {service.price}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">Connect?</span>
            </h2>
            <p className="text-neutral-300 text-lg">
              Fill out the form below and let's create something amazing together!
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                      Event Type *
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                    >
                      <option value="portrait">Portrait Session</option>
                      <option value="wedding">Wedding Photography</option>
                      <option value="event">Event Coverage</option>
                      <option value="commercial">Commercial Shoot</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-300 mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                      placeholder="City, Studio, etc."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300"
                  >
                    <option value="">Select Budget Range</option>
                    <option value="3000-5000">₹3,000 - ₹5,000</option>
                    <option value="5000-10000">₹5,000 - ₹10,000</option>
                    <option value="10000-20000">₹10,000 - ₹20,000</option>
                    <option value="20000+">₹20,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-2">
                    Tell me about your vision *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20 transition-all duration-300 resize-none"
                    placeholder="Describe your photography needs, ideas, or special requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.05, y: isSubmitting ? 0 : -2 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Inquiry
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="space-y-6"
            >
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch Directly</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors">
                    <Mail className="w-6 h-6 text-yellow-400" />
                    <div>
                      <div className="text-sm text-neutral-400">Email</div>
                      <div className="text-white font-medium">bipate.karan@gmail.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors">
                    <Phone className="w-6 h-6 text-yellow-400" />
                    <div>
                      <div className="text-sm text-neutral-400">Phone</div>
                      <div className="text-white font-medium">+91 88303 68618</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors">
                    <MapPin className="w-6 h-6 text-yellow-400" />
                    <div>
                      <div className="text-sm text-neutral-400">Location</div>
                      <div className="text-white font-medium">Nagpur, Maharashtra</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border border-yellow-500/20 rounded-xl">
                  <h4 className="text-lg font-bold mb-3 text-yellow-400">Response Time</h4>
                  <p className="text-neutral-300">
                    I typically respond to all photography inquiries within 24 hours. 
                    For urgent bookings, feel free to call me directly!
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 border-t border-neutral-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-neutral-400">
              © 2024 Karan Bipate. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a 
                href="mailto:bipate.karan@gmail.com"
                className="text-neutral-400 hover:text-yellow-400 transition-colors"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:+918830368618"
                className="text-neutral-400 hover:text-yellow-400 transition-colors"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PhotographyContact;

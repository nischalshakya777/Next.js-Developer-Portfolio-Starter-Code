import { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeInUp, FadeInLeft, FadeInRight } from '@/components/ScrollAnimations';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "hello@mywebsite.com" },
    { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
    { icon: MapPin, label: "Location", value: "San Francisco, CA" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInUp>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Get In <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-xl text-gray-300 leading-relaxed">
              Have a project in mind? Let's discuss how we can help bring your ideas to life.
              We're here to answer your questions and start your journey.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <FadeInLeft>
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Let's Connect</h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Whether you have a question about our services, pricing, or anything else, 
                  our team is ready to answer all your questions.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                          <Icon size={20} className="text-white" />
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">{info.label}</p>
                          <p className="text-white font-medium">{info.value}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Social Links */}
                <div className="mt-12">
                  <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {['Twitter', 'LinkedIn', 'GitHub', 'Dribbble'].map((social, index) => (
                      <motion.button
                        key={social}
                        className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 transition-colors"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <span className="text-white text-sm font-medium">
                          {social.slice(0, 2)}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInLeft>

            {/* Contact Form */}
            <FadeInRight>
              <motion.div
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
                
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                      >
                        <CheckCircle size={64} className="text-green-400 mx-auto mb-4" />
                      </motion.div>
                      <h4 className="text-white text-xl font-semibold mb-2">Message Sent!</h4>
                      <p className="text-gray-300">We'll get back to you soon.</p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-white text-sm font-medium mb-2">
                            Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/20 transition-all"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="block text-white text-sm font-medium mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/20 transition-all"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">
                          Subject
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/20 transition-all"
                          placeholder="What's this about?"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">
                          Message
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-white/20 transition-all resize-none"
                          placeholder="Tell us about your project..."
                        />
                      </div>
                      
                      <motion.button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>Send Message</span>
                        <Send size={20} />
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </motion.div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <FadeInUp>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Visit Our Office</h2>
              <p className="text-gray-300 text-lg">
                We'd love to meet you in person. Drop by our office for a coffee and chat.
              </p>
            </div>
          </FadeInUp>
          
          <FadeInUp delay={0.2}>
            <motion.div
              className="w-full h-80 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center">
                <MapPin size={48} className="text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">San Francisco Office</h3>
                <p className="text-gray-300">123 Innovation Street, San Francisco, CA 94102</p>
                <motion.button
                  className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Directions
                </motion.button>
              </div>
            </motion.div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Leadership = ({ heading, message, img, imageSize }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % img.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [img.length]);

  return (
    <section id="leadership" className="py-20 relative z-10 bg-gradient-to-b from-[#1B1A55]/10 to-[#070F2B]/0 border-y border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9290C3] to-[#ff7f7f] inline-block mb-4">
            {heading} <i className="fas fa-users ml-2 text-white/50"></i>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-5/12"
          >
            <p className="text-xl text-gray-300 leading-relaxed bg-[#1B1A55]/30 p-8 rounded-3xl border border-white/10 backdrop-blur-md shadow-2xl">
              {message}
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-7/12 w-full"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(146,144,195,0.2)] border border-white/10 bg-[#070F2B]/50 aspect-video">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full relative"
                >
                  <img
                    className="w-full h-full object-cover"
                    src={img[currentIndex].img}
                    alt={img[currentIndex].label}
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#070F2B] via-[#070F2B]/80 to-transparent p-6 pt-20">
                    <h3 className="text-2xl font-bold text-white mb-2">{img[currentIndex].label}</h3>
                    <p className="text-gray-300">{img[currentIndex].paragraph}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              <div className="absolute bottom-6 right-6 flex space-x-2">
                {img.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-[#ff7f7f] w-8' : 'bg-white/50 hover:bg-white'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;

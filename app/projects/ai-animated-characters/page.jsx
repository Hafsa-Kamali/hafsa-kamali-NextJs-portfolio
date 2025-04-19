"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { MdAnimation } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

// Sample AI character images
const aiCharacters = [
  { image: "/Avatar team/avatar (1).PNG", title: "Futuristic AI Assistant" },
  { image: "/Avatar team/avatar (2).PNG", title: "Cyberpunk Character" },
  { image: "/Avatar team/avatar (3).PNG", title: "Digital Woman Avatar" },
  { image: "/Avatar team/avatar (4).PNG", title: "Sci-Fi Robot Companion" },
  { image: "/Avatar team/avatar (5).PNG", title: "Virtual Reality Guide" },
  { image: "/Avatar team/avatar (6).PNG", title: "Holographic AI Personality" },
  { image: "/Avatar team/avatar (7).PNG", title: "Digital Art Character" },
  { image: "/Avatar team/avatar (8).PNG", title: "Neon Cybernetic Being" },
  { image: "/Avatar team/avatar (9).PNG", title: "Augmented Reality Avatar" },
  { image: "/Avatar team/avatar (10).PNG", title: "Digital Intelligence Portrait" },
  { image: "/Avatar team/avatar (11).PNG", title: "Neural Network Visualization" },
  { image: "/Avatar team/avatar (12).PNG", title: "Digital Dream Character" },
  { image: "/Avatar team/avatar (13).PNG", title: "AI Emotional Interface" },
  { image: "/Avatar team/avatar (14).PNG", title: "Digital Identity Portrait" },
  { image: "/Avatar team/avatar (15).PNG", title: "Machine Learning Persona" },
  { image: "/Avatar team/avatar16 (1).PNG", title: "Digital Consciousness" },
  { image: "/Avatar team/avatar17.PNG", title: "Virtual Assistant Avatar" },
  { image: "/Avatar team/avatar18.PNG", title: "Synthetic Being Portrait" },
  { image: "/Avatar team/avatar19.jpeg", title: "Close-up anime Character" },
  { image: "/Avatar team/avatar20.jpeg", title: "AI-Generated Character" },
];

const techStack = [
  "Midjourney", "DALL-E", "Stable Diffusion", "Leonardo AI", 
  "Adobe Character Animator", "Runway ML", "Artbreeder", "Character Creator", 
  "Blender", "Maya", "Unreal Engine"
];

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

const AIAnimatedCharacters = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const openModal = (character) => {
    setSelectedImage(character);
    setIsModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Restore body scroll when modal is closed
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-primary text-white py-16 px-6 md:px-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Digital particle effects */}
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-[#0ef]/10"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(60px)",
            }}
          />
        ))}
        
        {/* Digital dots */}
        {[...Array(40)].map((_, i) => (
          <div 
            key={i + "dot"}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 8 + 2,
              height: Math.random() * 8 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: `rgba(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}, 0.2)`,
            }}
          />
        ))}
        <div className="absolute inset-0 backdrop-blur-3xl bg-primary/60 z-10" />
      </div>

      {/* Main content */}
      <div className="relative z-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#0ef] tracking-wide">
            AI Animated Characters
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Explore my collection of AI-generated animated characters. Each character is uniquely designed using cutting-edge artificial intelligence and digital art techniques.
          </p>
        </motion.div>

        {/* Creation tools display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-center text-2xl font-semibold text-[#0ef] mb-6">Character Creation Tools</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.8, duration: 0.5 }}
                className="px-4 py-2 bg-[#111]/80 backdrop-blur-md border border-[#0ef]/30 rounded-full text-sm hover:shadow-[#0ef] hover:shadow-sm hover:bg-[#0ef]/10 transition-colors duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Character Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-center text-2xl font-semibold text-[#0ef] mb-8">Character Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {aiCharacters.map((character, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeIn}
                onClick={() => openModal(character)}
                className="group relative overflow-hidden rounded-xl border border-[#0ef]/20 hover:border-[#0ef] hover:shadow-lg hover:shadow-[#0ef]/20 transition duration-300 cursor-pointer h-72"
              >
                <Image
                  src={character.image}
                  alt={character.title}
                  width={300}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <h3 className="text-white font-medium text-lg">{character.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <div className="bg-[#111]/70 backdrop-blur-xl border border-[#0ef]/30 shadow-md shadow-[#0ef] rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <MdAnimation className="w-16 h-16 text-[#0ef]" />
            </div>
            <h2 className="text-3xl font-bold text-[#0ef] mb-4">Need Custom AI Characters?</h2>
            <p className="text-white/80 mb-6">
              I can create personalized AI-generated characters for your brand, game, application, or personal project. Let's bring your imagination to life with cutting-edge AI technology.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-[#0ef] text-gray-900 font-medium rounded-lg hover:bg-[#0ef]/70 hover:shadow-[#0ef] shadow-md transition-colors duration-300"
            >
              <Link href="/contact">Request Custom Character</Link>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Modal for character display */}
      <AnimatePresence>
        {isModalOpen && selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/10 backdrop-blur-md"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="bg-[#111] border border-[#0ef] rounded-2xl p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-[#0ef]">
                  {selectedImage.title}
                </h3>
                <button 
                  onClick={closeModal}
                  className="text-white hover:text-[#0ef] transition-colors"
                >
                  <FaTimes className="w-6 h-6" />
                </button>
              </div>
              
              <div className="flex flex-col items-center">
                <Image
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  width={800} height={800}
                  className="w-full max-h-[70vh] object-contain rounded-lg"
                />
                
                <div className="mt-6 flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-[#0ef]/90 text-gray-900 font-medium rounded-lg hover:bg-[#0ef] transition-colors duration-300"
                  >
                    <Link href="/contact">Request Similar Character</Link>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIAnimatedCharacters;
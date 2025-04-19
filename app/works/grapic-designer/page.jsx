"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {  FaImage, FaFileAlt, FaTimes } from "react-icons/fa";
import { MdOutlineDesignServices, MdBrush } from "react-icons/md";
import { IoLogoDesignernews } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

// Sample projects for each category
const portfolioItems = {
  logos: [
    { image: "/graphics/posture (2).jpg", title: "Yummy hub  Logo Design" },
    { image:"/graphics/posture (10).jpg", title: "Velveta StartUp Rebrand" },
    { image: "/graphics/logo retro.co.PNG", title: "Retro Logo" },
    { image: "/graphics/posture (1).jpeg", title: "Green Bloom Icon" },
    { image: "/graphics/posture (3).jpeg", title: "Tech Company Identity" },
    { image: "/graphics/posture (7).jpg", title: "Pixel lens Logo" },
    { image: "/graphics/posture (4).jpeg", title: "Nova Tech Design" },
    { image: "/graphics/log authentic.PNG", title: "Authentic Logo" },
    { image: "/graphics/hk resturant.jpeg", title: "HK Restaurant Logo" },
    { image: "/graphics/posture (4).jpg", title: "Brewest Cafe Logo" },
    { image: "/graphics/logo wildlife.PNG", title: "wildlife logo" },
    { image: "/graphics/posture (2).jpeg", title: "Green Bloom Logo" },
  ],
  
  posters: [
    { image: "/graphics/incredib.PNG", title: "Incredible-movie posture" },
    { image: "/graphics/mulan 2.PNG", title: "Mulan movie poster" },
    { image: "/graphics/posture (8).jpg", title: "Poster Design" },
    { image: "/graphics/posture (15).jpg", title: "Story Book Posture" },
    { image: "/graphics/posture (8).jpeg", title: "Shadow of times movie poster" },
    { image: "/graphics/incredibe2.PNG", title: "Incredible-movie posture" },
    { image: "/graphics/mulan.PNG", title: "Mulan movie poster" },
    { image: "/graphics/posture (19).jpg", title: "Earth-Day posture" },
    { image: "/graphics/posture (7).jpeg", title: "Shadow of times movie poster" },
    { image: "/graphics/posture (11).jpg", title: "Story Book Posture" },
    { image: "/graphics/posture (12).jpg", title: "Story Book Posture" },
    { image: "/graphics/posture (13).jpg", title: "Story Book Posture" },
    { image: "/graphics/posture (16).jpg", title: "Story Book Posture" },
    { image: "/graphics/posture (17).jpg", title: "Story Book Posture" },
    { image: "/graphics/posture (18).jpg", title: "Story Book Posture" },
    { image: "/graphics/posture (14).jpg", title: "Story Book Posture" },
    { image: "/graphics/THUNDERBOLTS (2).png", title: "Thumbnails" },
  ],
    brochures: [
      { image: "/graphics/fitness center.PNG", title: "Gym Fitness Brochure" },
      { image: "/graphics/client ahmed.png", title: "Product Catalog" },
      { image: "/graphics/client.png", title: "Server Catalog Design" },
      { image: "/graphics/Navy Eid Mubarak Sale.jpg", title: "Eid Mubarak Brochure" },
      { image: "/graphics/amazing menu brochure.jpeg", title: "Resturant Property Brochure" },
      { image: "/graphics/1.png", title: "Travel Brochure" },
      { image: "/graphics/1(2).png", title: "Travel Brochure" },
      { image: "/graphics/1(3).png", title: "Fashion Brochure"},
      { image: "/graphics/1(4).png", title: "Fashion Brochure"},
      { image: "/graphics/2.png", title: "Digital Marketing Brochure"},
      { image: "/graphics/2(2).png", title: "Digital Marketing Brochure"},
      { image: "/graphics/2(3).png", title: "Home Interior Brochure"},
      { image: "/graphics/2(4).png", title: "Home Interior Brochure"},
    ],
  sketches: [
    { image: "/graphics/anime (1).jpg", title: "Anime Character Design" },
    { image: "/graphics/anime (2).jpg", title: "Anime Character Design" },
    { image: "/graphics/anime (3).jpg", title: "Anime Character Design" },
    { image: "/graphics/anime (4).jpg", title: "Anime Character Design" },
    { image: "/graphics/anime (5).jpg", title: "Anime Character Design" },
    { image: "/graphics/anime (6).jpg", title: "Anime Character Design" },
    { image: "/graphics/anime (7).jpg", title: "Anime Character Design" },
    { image: "/graphics/anime (8).jpg", title: "Anime Character Design" },
    { image: "/graphics/anime (9).jpg", title: "Anime Character Design" },
    { image: "/graphics/anime (10).jpg", title: "Anime Character Design" },
    { image: "/graphics/RIsing Star (1).png", title: "Anime Character Design" },
    
  ]
};

const designCategories = [
  {
    title: "Logo Design",
    description: "Custom logo designs that establish your unique brand identity with memorable visuals.",
    icon: <IoLogoDesignernews className="w-16 h-16 text-[#0ef]" />,
    category: "logos"
  },
  {
    title: "Brochure Design",
    description: "Eye-catching brochures that effectively communicate your message with premium layouts.",
    icon: <FaFileAlt className="w-16 h-16 text-[#0ef]" />,
    category: "brochures"
  },
  {
    title: "Poster Design",
    description: "Striking poster designs that grab attention and leave a lasting impression on your audience.",
    icon: <MdOutlineDesignServices className="w-16 h-16 text-[#0ef]" />,
    category: "posters"
  },
  {
    title: "Custom Sketches",
    description: "Hand-crafted sketches and illustrations that bring your concepts and ideas to life.",
    icon: <MdBrush className="w-16 h-16 text-[#0ef]" />,
    category: "sketches"
  }
];

const techStack = [
  "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Figma", 
  "Procreate", "Canva", "CorelDRAW", "Sketch", "Affinity Designer", "Blender"
];

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

const GraphicDesignServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const openModal = (category) => {
    setSelectedCategory(category);
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
        {/* Paint splatter effects */}
        {[...Array(8)].map((_, i) => (
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
        
        {/* Color palette dots */}
        {[...Array(30)].map((_, i) => (
          <div 
            key={i + "dot"}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
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
            Graphic Design Services
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Transforming ideas into captivating visual stories. From brand identities to marketing materials, explore my creative design solutions that make your vision come to life.
          </p>
        </motion.div>

        {/* Design tools display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-center text-2xl font-semibold text-[#0ef] mb-6">Design Tools</h2>
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

        {/* Design services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {designCategories.map((category, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeIn}
              onClick={() => openModal(category.category)}
              className="bg-[#111]/60 backdrop-blur-md border border-[#0ef] rounded-2xl p-6 hover:shadow-[0_10px_10px_#0ef] transition duration-500 relative overflow-hidden group cursor-pointer h-full flex flex-col"
            >
              {/* Glass effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0ef]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex justify-center mb-6">
                {category.icon}
              </div>
              
              <h3 className="text-2xl font-semibold text-[#0ef] mb-2 text-center">
                {category.title}
              </h3>
              
              <p className="text-white/80 mb-4 text-center flex-grow">
                {category.description}
              </p>
              
              <div className="text-center">
                <span className="inline-flex items-center text-sm uppercase text-[#0ef] font-medium group-hover:underline transition-all">
                  View Portfolio
                  <svg className="w-4 h-4 ml-1 group-hover:ml-2 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Design process section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-16"
        >
          <h2 className="text-center text-2xl font-semibold text-[#0ef] mb-8">Design Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-[#111]/50 backdrop-blur-md p-6 rounded-xl border border-[#0ef]/20 hover:border-[#0ef]/60 transition-colors duration-300 relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#0ef] rounded-full flex items-center justify-center text-black font-bold">1</div>
              <h3 className="text-xl font-semibold mb-2 mt-2">Discovery</h3>
              <p className="text-white/70">Understanding your brand, goals, and target audience to inform design directions.</p>
            </div>
            <div className="bg-[#111]/50 backdrop-blur-md p-6 rounded-xl border border-[#0ef]/20 hover:border-[#0ef]/60 transition-colors duration-300 relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#0ef] rounded-full flex items-center justify-center text-black font-bold">2</div>
              <h3 className="text-xl font-semibold mb-2 mt-2">Concept</h3>
              <p className="text-white/70">Creating initial design concepts based on research and project requirements.</p>
            </div>
            <div className="bg-[#111]/50 backdrop-blur-md p-6 rounded-xl border border-[#0ef]/20 hover:border-[#0ef]/60 transition-colors duration-300 relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#0ef] rounded-full flex items-center justify-center text-black font-bold">3</div>
              <h3 className="text-xl font-semibold mb-2 mt-2">Refinement</h3>
              <p className="text-white/70">Polishing and perfecting your chosen concept with detailed feedback cycles.</p>
            </div>
            <div className="bg-[#111]/50 backdrop-blur-md p-6 rounded-xl border border-[#0ef]/20 hover:border-[#0ef]/60 transition-colors duration-300 relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#0ef] rounded-full flex items-center justify-center text-black font-bold">4</div>
              <h3 className="text-xl font-semibold mb-2 mt-2">Delivery</h3>
              <p className="text-white/70">Providing final design assets in multiple formats ready for all applications.</p>
            </div>
          </div>
        </motion.div>

        {/* Call to action section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center"
        >
          <div className="bg-[#111]/70 backdrop-blur-xl border border-[#0ef]/30 shadow-md shadow-[#0ef] rounded-2xl p-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0ef] mb-4">Ready to Elevate Your Brand?</h2>
            <p className="text-white/80 mb-6">
              Let's collaborate to create stunning visual designs that captivate your audience and elevate your brand presence in the market.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-[#0ef] text-gray-900 font-medium rounded-lg hover:bg-[#0ef]/70 hover:shadow-[#0ef] shadow-md transition-colors duration-300"
            >
              <Link href="/contact">Request Design Consultation</Link>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Modal for portfolio display */}
      <AnimatePresence>
        {isModalOpen && selectedCategory && (
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
              className="bg-[#111] border border-[#0ef] rounded-2xl p-6 w-full max-w-5xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-[#0ef]">
                  {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Portfolio
                </h3>
                <button 
                  onClick={closeModal}
                  className="text-white hover:text-[#0ef] transition-colors"
                >
                  <FaTimes className="w-6 h-6" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {portfolioItems[selectedCategory].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group relative overflow-hidden rounded-lg"
                  >
                    <Image
                      src={item.image} 
                      alt={item.title}
                      width={400} height={400}
                      className="w-full h-50 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <h4 className="text-white font-medium">{item.title}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-[#0ef]/90 text-gray-900 font-medium rounded-lg hover:bg-[#0ef] transition-colors duration-300"
                >
                  <Link href="/contact">Request Similar Project</Link>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GraphicDesignServices;
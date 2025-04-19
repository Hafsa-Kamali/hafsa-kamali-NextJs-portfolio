"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaVideo, FaFilm, FaTimes, FaYoutube } from "react-icons/fa";
import { MdAnimation, MdVideoSettings } from "react-icons/md";
import { SiAdobeaftereffects } from "react-icons/si";
import Link from "next/link";
import Image from "next/image";

// Sample projects for each category - changed from JPG to MP4 format
const portfolioItems = {
  videoEditing: [
    { video: "/videos/video-edit (1).mp4", title: "Corporate Promotional Video" },
    { video: "/videos/video-edit (2).mp4", title: "Bakery Product Video" },
    { video: "/videos/video-edit (1)).mp4", title: "Travel Montage Series" },
    { video: "/videos/video-edit (8)).mp4", title: "Product Showcase Video" },
    { video: "/videos/video-edit (3)).mp4", title: "Music Video Production" },
    { video: "/videos/video-edit (4)).mp4", title: "Event Recap Highlight" },
    { video: "/videos/video-edit (5)).mp4", title: "Interview Series Edit" },
    { video: "/videos/video-edit (6)).mp4", title: "Sports Highlight Reel" },
  ],
  
  motionGraphics: [
    { video: "/videos/video-motion (1).mp4", title: "Motion Graphics" },
    { video: "/videos/video-motion (2).mp4", title: "Motion Graphics" },
    { video: "/videos/video-motion (3).mp4", title: "Motion Graphics" },
    { video: "/videos/video-motion (4).mp4", title: "Motion Graphics" },
    { video: "/videos/video-motion (5).mp4", title: "Motion Graphics" },
    { video: "/videos/video-motion (6).mp4", title: "Motion Graphics" },
    { video: "/videos/video-motion (7).mp4", title: "Motion Graphics" },
    { video: "/videos/video-motion.mp4", title: "Motion Graphics" },
  ],
  
  threeDAnimation: [
    { video: "/videos/animated (7).mp4", title: "Character Animation" },
    { video: "/videos/animated (1).mp4", title: "Architectural Visualization" },
    { video: "/videos/animated (3).mp4", title: "Product 3D Animation" },
    { video: "/videos/video-motion.mp4", title: "Abstract 3D Elements" },
    { video: "/videos/animated (9).mp4", title: "Neon Environment" },
    { video: "/videos/animated (4).mp4", title: "Cartoon Visualization" },
    { video: "/videos/animated (8).mp4", title: "Gaming Asset Animation" },
    { video: "/videos/animated (10).mp4", title: "Anime Character Animation" },
    { video: "/videos/animated (2).mp4", title: "Anime Character Animation" },
    { video: "/videos/animated (5).mp4", title: "Cartoon Environment" },
    { video: "/videos/animated (6).mp4", title: "Anime close-up" },
  ],
  
  visualEffects: [
    { video: "/videos/visual effect (3).mp4", title: "Green Screen Compositing" },
    { video: "/videos/visual effect (2).mp4", title: "Particle Effects System" },
    { video: "/videos/visual effect (1).mp4", title: "Environment Enhancement" },
    { video: "/videos/visual effect (9).mp4", title: "Virtual Set Extension" },
    { video: "/videos/visual effect (7).mp4", title: "Realistic Fire Effects" },
    { video: "/videos/visual effect (11).mp4", title: "Digital Makeup & Aging" },
    { video: "/videos/visual effect (8).mp4", title: "Virtual Set Extension" },
    { video: "/videos/visual effect.mp4", title: "Weather Effect Implementation" },
    { video: "/videos/visual effect (10).mp4", title: "Object Removal & Clean-up" },
  ]
};

const videoCategories = [
  {
    title: "Video Editing",
    description: "Professional video editing services that transform raw footage into compelling visual stories.",
    icon: <FaVideo className="w-16 h-16 text-[#0ef]" />,
    category: "videoEditing"
  },
  {
    title: "Motion Graphics",
    description: "Dynamic motion graphics that bring static elements to life with engaging animations.",
    icon: <SiAdobeaftereffects className="w-16 h-16 text-[#0ef]" />,
    category: "motionGraphics"
  },
  {
    title: "3D Animation",
    description: "Immersive 3D animations that add depth and dimension to your visual content.",
    icon: <MdAnimation className="w-16 h-16 text-[#0ef]" />,
    category: "threeDAnimation"
  },
  {
    title: "Visual Effects",
    description: "Cutting-edge VFX that create stunning visual experiences beyond what's physically possible.",
    icon: <MdVideoSettings className="w-16 h-16 text-[#0ef]" />,
    category: "visualEffects"
  }
];

const techStack = [
  "Adobe Premiere Pro", "Adobe After Effects", "DaVinci Resolve", 
  "Cinema 4D", "Blender", "Final Cut Pro", "Maya", "Nuke", 
  "Adobe Animate", "Motion", "Fusion", "Audition"
];

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

const VideoAnimationServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playingVideo, setPlayingVideo] = useState(null);
  const [showFilmVideo, setShowFilmVideo] = useState(false);

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
    setPlayingVideo(null);
    // Restore body scroll when modal is closed
    document.body.style.overflow = 'auto';
  };

  const togglePlayVideo = (idx) => {
    if (playingVideo === idx) {
      setPlayingVideo(null);
    } else {
      setPlayingVideo(idx);
    }
  };

  const openYoutubeVideo = () => {
    window.open("https://www.youtube.com/watch?v=your-film-id", "_blank");
  };

  return (
    <div className="min-h-screen bg-primary text-white py-16 px-6 md:px-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Video frames effect */}
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-md border border-[#0ef]/20"
            style={{
              width: Math.random() * 300 + 100,
              height: (Math.random() * 300 + 100) * 0.5625, // 16:9 aspect ratio
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 20 - 10}deg)`,
              opacity: 0.08,
            }}
          />
        ))}
        
        {/* Light streaks */}
        {[...Array(15)].map((_, i) => (
          <div 
            key={i + "streak"}
            className="absolute"
            style={{
              width: Math.random() * 500 + 100,
              height: 1 + Math.random() * 3,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 180}deg)`,
              background: `linear-gradient(90deg, transparent, rgba(0, 238, 255, ${Math.random() * 0.5}), transparent)`,
              boxShadow: `0 0 20px rgba(0, 238, 255, ${Math.random() * 0.5})`,
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
            Video Editing & Animation Services
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Bringing stories to life through motion. From professional video editing to captivating animations, discover creative solutions that make your vision move and inspire.
          </p>
        </motion.div>

        {/* Featured Film Section - ADDED NEW SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="text-center text-3xl font-bold text-[#0ef] mb-8">Featured Film Project</h2>
          <div className="max-w-4xl mx-auto bg-[#111]/70 backdrop-blur-xl border border-[#0ef]/40 rounded-2xl p-6 shadow-lg shadow-[#0ef]/20">
            <div className="relative aspect-video rounded-xl overflow-hidden mb-6 cursor-pointer group" onClick={() => setShowFilmVideo(!showFilmVideo)}>
              {showFilmVideo ? (
                <video 
                  src="/videos/your-film-video.mp4" 
                  className="w-full h-full object-cover"
                  autoPlay
                  controls
                />
              ) : (
                <>
                  <Image
                    src="/videos/final image.jpg" 
                    alt="Film Cover" 
                    width={800}
                    height={450}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-100 group-hover:opacity-80 transition-opacity">
                    <div className="w-20 h-20 rounded-full bg-[#0ef] flex items-center justify-center">
                      <svg className="w-10 h-10 text-black ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                </>
              )}
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3">Your Film Title</h3>
            <p className="text-white/80 mb-6">
              A captivating journey that showcases my expert filmmaking techniques and storytelling abilities. 
              This project demonstrates my commitment to creating compelling visual narratives that engage and 
              inspire audiences worldwide.
            </p>
            
            <div className="flex justify-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openYoutubeVideo}
                className="px-6 py-3 bg-[#0ef] text-gray-900 font-medium rounded-lg flex items-center hover:bg-[#0ef]/70 transition-colors duration-300"
              >
               <FaYoutube className="mr-2 text-xl" /><Link href="https://www.youtube.com/watch?v=VpqZQRWYaaU"> Watch on YouTube </Link>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-[#0ef] text-[#0ef] font-medium rounded-lg hover:bg-[#0ef]/10 transition-colors duration-300"
              >
                <Link href="/contact">Request Similar Project</Link>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Video tools display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-center text-2xl font-semibold text-[#0ef] mb-6">Production Tools</h2>
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

        {/* Video services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {videoCategories.map((category, index) => (
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

        {/* Production process section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-16"
        >
          <h2 className="text-center text-2xl font-semibold text-[#0ef] mb-8">Production Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-[#111]/50 backdrop-blur-md p-6 rounded-xl border border-[#0ef]/20 hover:border-[#0ef]/60 transition-colors duration-300 relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#0ef] rounded-full flex items-center justify-center text-black font-bold">1</div>
              <h3 className="text-xl font-semibold mb-2 mt-2">Pre-Production</h3>
              <p className="text-white/70">Planning your project with storyboards, scripts, and technical requirements.</p>
            </div>
            <div className="bg-[#111]/50 backdrop-blur-md p-6 rounded-xl border border-[#0ef]/20 hover:border-[#0ef]/60 transition-colors duration-300 relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#0ef] rounded-full flex items-center justify-center text-black font-bold">2</div>
              <h3 className="text-xl font-semibold mb-2 mt-2">Production</h3>
              <p className="text-white/70">Creating the initial drafts and base elements for your video or animation.</p>
            </div>
            <div className="bg-[#111]/50 backdrop-blur-md p-6 rounded-xl border border-[#0ef]/20 hover:border-[#0ef]/60 transition-colors duration-300 relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#0ef] rounded-full flex items-center justify-center text-black font-bold">3</div>
              <h3 className="text-xl font-semibold mb-2 mt-2">Post-Production</h3>
              <p className="text-white/70">Refining your content with advanced editing, color grading, and effects.</p>
            </div>
            <div className="bg-[#111]/50 backdrop-blur-md p-6 rounded-xl border border-[#0ef]/20 hover:border-[#0ef]/60 transition-colors duration-300 relative">
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#0ef] rounded-full flex items-center justify-center text-black font-bold">4</div>
              <h3 className="text-xl font-semibold mb-2 mt-2">Delivery</h3>
              <p className="text-white/70">Providing final files optimized for your target platforms and devices.</p>
            </div>
          </div>
        </motion.div>

        {/* Additional services section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mb-16"
        >
          <h2 className="text-center text-2xl font-semibold text-[#0ef] mb-8">Additional Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#111]/50 backdrop-blur-md p-6 rounded-xl border border-[#0ef]/20 hover:border-[#0ef]/60 transition-colors duration-300">
              <div className="flex justify-center mb-4">
                <FaFilm className="w-10 h-10 text-[#0ef]/80" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Color Grading</h3>
              <p className="text-white/70 text-center">Professional color correction and stylized grading to establish the perfect mood and visual consistency.</p>
            </div>
            <div className="bg-[#111]/50 backdrop-blur-md p-6 rounded-xl border border-[#0ef]/20 hover:border-[#0ef]/60 transition-colors duration-300">
              <div className="flex justify-center mb-4">
                <MdAnimation className="w-10 h-10 text-[#0ef]/80" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Character Animation</h3>
              <p className="text-white/70 text-center">Custom character design and animation for mascots, explainer videos, and storytelling.</p>
            </div>
            <div className="bg-[#111]/50 backdrop-blur-md p-6 rounded-xl border border-[#0ef]/20 hover:border-[#0ef]/60 transition-colors duration-300">
              <div className="flex justify-center mb-4">
                <MdVideoSettings className="w-10 h-10 text-[#0ef]/80" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Sound Design</h3>
              <p className="text-white/70 text-center">Custom audio mixing, sound effects, and music selection to enhance your visual content.</p>
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
            <h2 className="text-3xl font-bold text-[#0ef] mb-4">Ready to Bring Your Story to Life?</h2>
            <p className="text-white/80 mb-6">
              Let's collaborate to create stunning videos and animations that captivate your audience and effectively communicate your message.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-[#0ef] text-gray-900 font-medium rounded-lg hover:bg-[#0ef]/70 hover:shadow-[#0ef] shadow-md transition-colors duration-300"
            >
              <Link href="/contact">Request Video Production</Link>
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
                  {selectedCategory === "videoEditing" ? "Video Editing" : 
                   selectedCategory === "motionGraphics" ? "Motion Graphics" : 
                   selectedCategory === "threeDAnimation" ? "3D Animation" : 
                   "Visual Effects"} Portfolio
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
                    className="group relative overflow-hidden rounded-lg aspect-video cursor-pointer"
                    onClick={() => togglePlayVideo(idx)}
                  >
                    {playingVideo === idx ? (
                      <video 
                        src={item.video}
                        autoPlay
                        controls
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <>
                        <video 
                          src={item.video}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          muted
                          playsInline
                          onMouseOver={(e) => e.target.play()}
                          onMouseOut={(e) => {
                            e.target.pause();
                            e.target.currentTime = 0;
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                          <h4 className="text-white font-medium">{item.title}</h4>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-[#0ef]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
                            </svg>
                          </div>
                        </div>
                      </>
                    )}
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

export default VideoAnimationServices;
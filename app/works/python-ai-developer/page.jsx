"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaRobot, FaBrain } from "react-icons/fa";
import { LuBrain } from "react-icons/lu";
import { SiTensorflow } from "react-icons/si";
import { FaUserLock } from "react-icons/fa";
import { FaRegFaceLaughWink } from "react-icons/fa6";
import { IoMdSpeedometer } from "react-icons/io";
import { IoLibraryOutline } from "react-icons/io5";
import { BsShieldLock } from "react-icons/bs";
import { GiLifeInTheBalance } from "react-icons/gi";
import { PiMapPinAreaFill } from "react-icons/pi";
import Link from "next/link";

const projects = [
  {
    title: "Face-Mesh Detection app",
    description: "Real-time face-mesh detection using OpenCV and MediaPipe for interactive applications using open-cv Python.",
    link: "https://github.com/Hafsa-Kamali/Face-mesh-Detection",
    icon: <FaRegFaceLaughWink className="w-10 h-10 text-[#0ef]" />
  },
  {
    title: "Streamlit Portfolio Website with Ai chatbot",
    description: "Interactive portfolio website with integrated AI chatbot connect with LLM llama-3 studio for personalized user experience.",
    link: "https://portfolio-website-w6r3vfd9.streamlit.app/",
    icon: <FaRobot className="w-10 h-10 text-[#0ef]" />
  },
  {
    title: "Data-Driven Encryption",
    description: "Interactive visualization platform using Pandas,hashlib and Plotly for store and retrive your data securely.",
    link: "https://data-driven-project-kfjhbc.streamlit.app/",
    icon: <BsShieldLock className="w-10 h-10 text-[#0ef]" />
  },
  {
    title: "Bmi-Calculator",
    description: "Scalable ML models deployed as APIs using FastAPI and Docker for enterprise solutions.",
    link: "https://bmi-calculator-6fgah.streamlit.app/",
    icon: <IoMdSpeedometer className="w-10 h-10 text-[#0ef]" />
  },
  {
    title: "Information Country-Code Project",
    description: "Country code information retrieval using Python and REST APIs for data-driven applications.",
    link: "https://information-country-code-project-dlgivfv.streamlit.app/",
    icon: <PiMapPinAreaFill className="w-10 h-10 text-[#0ef]" />
  },
  {
    title: "Library Management System",
    description: "AI-powered library management system using add, remove,select for efficient book tracking and user management.",
    link: "https://library-manager-hk.streamlit.app/",
    icon: <IoLibraryOutline className="w-10 h-10 text-[#0ef]" />
  },
  {
    title: "password Strength meter",
    description: "Password strength evaluation using Python and Streamlit for secure password management.",
    link: "https://password-app-generator-python.streamlit.app/",
    icon: <FaUserLock  className="w-10 h-10 text-[#0ef]" />
  },
  {
    title: "Unit Converter",
    description: "Unit conversion application using Python and Streamlit for seamless unit conversions.",
    link: "https://unit-convertor-g9dxvrgg6r55bkzr7yx75w.streamlit.app/",
    icon: <GiLifeInTheBalance className="w-10 h-10 text-[#0ef]" />
  },
  {
    title: "Growth Mindset Challenge",
    description: "Interactive growth mindset challenge using Python and Streamlit for personal development.",
    link: "https://appio-mindgrowth.streamlit.app/",
    icon: <LuBrain className="w-10 h-10 text-[#0ef]" />
  },
];

const techStack = [
  "Python", "TensorFlow", "matplotlib", "Scikit-learn", "Crew Ai", 
  "NumPy", "Pandas", "Streamlit", "OpenCV", "FastAPI"
];

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

const PythonAIDevelopment = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-primary text-white py-16 px-6 md:px-20 relative overflow-hidden">
      {/* Glass-like overlay with background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Background shapes - binary/data patterns */}
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute text-[#0ef]/5 text-9xl font-mono select-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              opacity: 0.2,
            }}
          >
            {Math.random() > 0.5 ? "0" : "1"}
          </div>
        ))}
        {/* Neural network visualization */}
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
            Python AI Development
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            Specializing in cutting-edge artificial intelligence solutions using Python. From machine learning models to computer vision systems and natural language processing. Explore my latest AI projects below!
          </p>
        </motion.div>

        {/* Tech stack display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-center text-2xl font-semibold text-[#0ef] mb-6">AI Tech Stack</h2>
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

        {/* Projects grid */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeIn}
              className="bg-[#111]/60 backdrop-blur-md border border-[#0ef] rounded-2xl p-6 hover:shadow-[0_10px_10px_#0ef] transition duration-500 relative overflow-hidden group"
            >
              {/* Glass effect overlay - with pointer-events-none */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0ef]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="mb-6">
                {project.icon}
              </div>
              <h3 className="text-2xl font-semibold text-[#0ef] mb-2">
                {project.title}
              </h3>
              <p className="text-white/80 mb-4">{project.description}</p>
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase text-[#0ef] underline hover:text-white transition inline-flex items-center"
              >
                View Project 
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* AI Services section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-16"
        >
          <h2 className="text-center text-2xl font-semibold text-[#0ef] mb-8">AI Development Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#111]/50 backdrop-blur-md p-6 rounded-xl border border-[#0ef]/20 hover:border-[#0ef]/60 transition-colors duration-300">
              <FaBrain className="w-8 h-8 text-[#0ef] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
              <p className="text-white/70">Custom ML models for classification, regression, clustering, and recommendation systems tailored to your business needs.</p>
            </div>
            <div className="bg-[#111]/50 backdrop-blur-md p-6 rounded-xl border border-[#0ef]/20 hover:border-[#0ef]/60 transition-colors duration-300">
              <SiTensorflow className="w-8 h-8 text-[#0ef] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Deep Learning</h3>
              <p className="text-white/70">Neural networks for complex pattern recognition, image analysis, and natural language understanding using TensorFlow and PyTorch.</p>
            </div>
            <div className="bg-[#111]/50 backdrop-blur-md p-6 rounded-xl border border-[#0ef]/20 hover:border-[#0ef]/60 transition-colors duration-300">
              <FaRobot className="w-8 h-8 text-[#0ef] mb-4" />
              <h3 className="text-xl font-semibold mb-2">NLP & Chatbots</h3>
              <p className="text-white/70">Intelligent conversational AI systems with advanced language understanding and generation capabilities for superior user engagement.</p>
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
            <h2 className="text-3xl font-bold text-[#0ef] mb-4">Ready to Leverage AI For Your Business?</h2>
            <p className="text-white/80 mb-6">
              Let's transform your data into actionable insights and build intelligent systems that drive innovation and efficiency for your organization.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-[#0ef] text-gray-900 font-medium rounded-lg hover:bg-[#0ef]/70 hover:shadow-[#0ef] shadow-md transition-colors duration-300"
            >
              <Link href="/contact">Get AI Consultation</Link>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PythonAIDevelopment;

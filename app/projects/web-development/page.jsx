"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaShoppingBag, FaGlobe } from "react-icons/fa";
import { PiArticleNyTimesLight } from "react-icons/pi";
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { GiSpaceship } from "react-icons/gi";
import Link from "next/link";

const projects = [
  {
    title: "Q commerce Project",
    description: "A full-featured online store built with Next.js, Tailwind, Stripe, and Sanity CMS.",
    link: "https://cafeflux-coffeeshop.vercel.app/",
    icon: <FaShoppingBag className="w-10 h-10 text-[#0ef]" />
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built using React, Framer Motion, and Tailwind CSS.",
    link: "https://hafsa-kamali-next-js-portfolio.vercel.app/",
    icon: <FaGlobe className="w-10 h-10 text-[#0ef]" />
  },
  {
    title: "Blog Platform",
    description: "Markdown-based blog site with dynamic routing and content management.",
    link: "https://yummy-hub-45h.netlify.app/",
    icon: <PiArticleNyTimesLight className="w-10 h-10 text-[#0ef]" />
  },
  {
    title: "E-commerce Store",
    description: "A full-featured online store built with Next.js, Tailwind, Stripe, and Sanity CMS.",
    link: "https://cafeflux-coffeeshop.vercel.app/",
    icon:  <FaCartShopping className="w-10 h-10 text-[#0ef]" />
  },
  {
    title: "Resume Builder",
    description: "Resume builder built using React, Framer Motion, and Tailwind CSS.",
    link: "https://hafsa-kamali-next-js-portfolio.vercel.app/",
    icon: <CgProfile className="w-10 h-10 text-[#0ef]" />
  },
  {
    title: "Space Potfolio",
    description: "Markdown-based blog site with dynamic routing and content management.",
    link: "https://yummy-hub-45h.netlify.app/",
    icon: <GiSpaceship className="w-10 h-10 text-[#0ef]" />
  }
];

const techStack = [
  "HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Next.js", 
  "Tailwind CSS", "Framer Motion", "Node.js", "MongoDB"
];

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
  }),
};

const WebDevelopment = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen bg-primary text-white py-16 px-6 md:px-20 relative overflow-hidden">
      {/* Glass-like overlay with background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Background shapes */}
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
            Web Development Services
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-lg">
            I specialize in creating sleek, responsive, and modern websites using technologies like HTML, CSS, JavaScript, React, TypeScript, and Next.js. Explore my latest web development projects below!
          </p>
        </motion.div>

        {/* Tech stack display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-center text-2xl font-semibold text-[#0ef] mb-6">Tech Stack</h2>
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
             {/* Glass effect overlay - add pointer-events-none */}
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

        {/* Call to action section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="text-center"
        >
          <div className="bg-[#111]/70 backdrop-blur-xl border border-[#0ef]/30 shadow-md shadow-[#0ef] rounded-2xl p-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0ef] mb-4">Ready to Bring Your Vision to Life?</h2>
            <p className="text-white/80 mb-6">
              Let's collaborate to create a modern, responsive website that perfectly represents your brand and engages your audience.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-[#0ef] text-gray-900 font-medium rounded-lg hover:bg-[#0ef]/70 hover:shadow-[#0ef] shadow-md transition-colors duration-300"
            >
             <Link href="/contact"> Get in Touch</Link>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WebDevelopment;
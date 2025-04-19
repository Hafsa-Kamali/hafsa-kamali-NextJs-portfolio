"use client";

import {motion} from "framer-motion";
import React, {useState} from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowDownRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger, 
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    title: "Web Development",
    category: "Web Development", // Added category field to match what's used in the component
    description:
    "Explore our web development services including responsive websites, e-commerce solutions, and interactive web applications built with modern technologies.",
    image: "/assets/web-develop.png",
    href: "/projects/web-development",
    github: "https://github.com/Hafsa-Kamali",
    stack: [{ name: "React" }, { name: "Next.js" }, { name: "Tailwind" }] // Added stack field that was missing
  },
  {
    num: "02",
    title: "Python AI Developer",
    category: "Python AI Developer",
    description:
    "Discover our AI development services using Python for machine learning, data analysis, and intelligent automation solutions.",
    image: "/assets/python.png",
    href: "/projects/python-ai-developer",
    github: "https://github.com/Hafsa-Kamali",
    stack: [{ name: "Python" }, { name: "Pandas" }, { name: "Numpy" }, { name: "Streamlit" }]
  },
  {
    num: "03",
    title: "Graphic Designer",
    category: "Graphic Designer",
    description:
    "Creative graphic design services including branding, illustration, UI/UX design, and visual content creation for digital and print media.",
    image: "/graphics/posture (17).jpg",
    href: "/projects/graphic-designer",
    github: "https://github.com/Hafsa-Kamali",
    stack: [{ name: "Photoshop" }, { name: "Illustrator" }, { name: "Figma" }, { name: "Canva" }]
  },
  {
    num: "04",
    title: "Video Editing",
    category: "Video Editing",
    description:
    "Professional video editing services covering post-production, motion graphics, color grading, and special effects for various video formats.",
    image: "/videos/final image.jpg",
    href: "/projects/video-editing",
    github: "https://github.com/Hafsa-Kamali",
    stack: [{ name: "Premiere Pro" }, { name: "After Effects" }, { name: "DaVinci Resolve" }]
  },
  {
    num: "05",
    title: "Ai Animated Characters",
    category: "Ai Animated Characters",
    description:
    "Explore our AI animated character services for engaging storytelling, virtual assistants, and interactive experiences in various media.",
    image: "/Avatar team/areeba.PNG",
    href: "/projects/ai-animated-characters",
    github: "https://github.com/Hafsa-Kamali",
    stack: [{ name: "Blender" }, { name: "Maya" }, { name: "Unity" }, { name: "Unreal Engine" }]

  }
];

const Services = () => {
  const [project, setProject] = useState(projects[0]);
 
  const handleSlideChange = (swiper) => {
    // get current slide index 
    const currentIndex = swiper.activeIndex;
    // update project state based on the current slide index
    setProject(projects[currentIndex]);
  };
  
  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      animate={{ 
        opacity: 1, 
        transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col 
xl:justify-between order-2 xl:order-none pr-[2rem]">

            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent
              text-outline">{project.num}</div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent
              transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/* project description */}
              <p className="text-white/80">{project.description}</p>
              {/* project stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => { 
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/30"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.href}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full 
                      bg-white/10 flex justify-center items-center group">
                        <BsArrowDownRight className="text-white text-3xl group-hover:text-accent transition-all duration-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full 
                      bg-white/10 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent transition-all duration-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[650px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image 
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns 
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="rounded-full bg-white/10 group hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" 
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
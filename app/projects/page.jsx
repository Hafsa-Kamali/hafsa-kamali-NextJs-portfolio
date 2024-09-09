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
    category:"Web Development Calculator Project",
    title: " Calculator Project",
    description:
    "The calculator web developer project is a fantastic way to hone your skills in HTML, CSS, and JavaScript by creating a fully functional calculator from scratch. This project not only enhances your understanding of web development fundamentals but also provides a practical application to showcase your coding abilities.",    stack:[{name:"HTML"},{name:"CSS"},{name:"JavaScript"},{name:"Typescript"}],
    image:"/assets/calculator.png",	
    live:"",
    github:"https://github.com/Hafsa-Kamali/node---projects/tree/main/CALCULATOR-PROJECT"
  },
  {
    num: "02",
    category:"Web Development Adventure Game Project",
    title: "Adventure Game Project",
    description:
    "The “Web Development Adventure Game Project” is an exciting initiative where you create an interactive game using HTML, CSS, and JavaScript. This project not only sharpens your coding skills but also adds a fun, gamified element to your web development portfolio.",
    stack:[{name:"HTML"},{name:"CSS"},{name:"JavaScript"},{name:"Typescript"}],
    image:"/assets/adventure game project.png",	
    live:"",
    github:"https://github.com/Hafsa-Kamali/node---projects/tree/main/ADVENTURE%20GAME%20-PROJECT"
  },
  {
    num: "03",
    category:"Atm-Project",
    title: " Atm-Project",
    description:
    "The “ATM Project” is a practical web development exercise where you simulate an Automated Teller Machine using HTML, CSS, and JavaScript. This project helps you understand user authentication, transaction handling, and interface design, making it a valuable addition to your coding portfolio.",
    stack:[{name:"HTML"},{name:"CSS"},{name:"JavaScript"},{name:"Typescript"}],
    image:"/assets/Atm project.png",	
    live:"",
    github:"https://github.com/Hafsa-Kamali/node---projects/tree/main/ATM%20-PROJECT"
  },
  {
    num: "04",
    category:" Web Development CountDown-Timer Project",
    title: "CountDown-Timer Project",
    description:
    "The “CountDown-Timer Project” is a dynamic web development task where you build a countdown timer using HTML, CSS, and JavaScript. This project enhances your understanding of time-based functions and user interface design, making it a great addition to your coding portfolio.",
    stack:[{name:"HTML"},{name:"CSS"},{name:"JavaScript"},{name:"Typescript"}],
    image:"/assets/countdown.png",	
    live:"",
    github:"https://github.com/Hafsa-Kamali/node---projects/tree/main/COUNTDOWN%20TIMER%20-PROJECT"
  },
  {
    num: "05",
    category:"Web Development Currency Converter Project",
    title: "Currency Converter Project",
    description:
    "The “Currency Converter Project” is a valuable web development exercise where you create a tool to convert currencies using HTML, CSS, and JavaScript. This project enhances your understanding of API integration and real-time data handling, making it a standout addition to your coding portfolio.",
    stack:[{name:"HTML"},{name:"CSS"},{name:"JavaScript"},{name:"Typescript"}],
    image:"/assets/currency convertor02.png",	
    live:"",
    github:"https://github.com/Hafsa-Kamali/node---projects/tree/main/CURRENCY%20CONVERTER-PROJECT"
  },
  {
    num: "06",
    category:"Web Development Number-Guessing-Game Project",
    title: "Number-Guessing-Game Project",
    description:
    "The “Number-Guessing-Game Project” is an engaging web development task where you create a game to guess a randomly generated number using HTML, CSS, and JavaScript. This project enhances your logic-building skills and user interaction design, making it a fun and educational addition to your coding portfolio.",
    stack:[{name:"HTML"},{name:"CSS"},{name:"JavaScript"},{name:"Typescript"}],
    image:"/assets/num guess game.png",	
    live:"",
    github:"https://github.com/Hafsa-Kamali/node---projects/tree/main/NUMBER%20-GUEESING-GAME%20-%20PROJECT"
  },
  {
    num: "07",
    category:"Web Development OOP Bank Project",
    title: "OOP Bank Project",
    description:
    "The “OOP Bank Project” is a comprehensive web development task where you build a banking system using Object-Oriented Programming principles with HTML, CSS, and JavaScript. This project deepens your understanding of OOP concepts and financial application development, making it a robust addition to your coding portfolio.",
    stack:[{name:"HTML"},{name:"CSS"},{name:"JavaScript"},{name:"Typescript"}],
    image:"/assets/oop bank 1.png",	
    live:"",
    github:"https://github.com/Hafsa-Kamali/node---projects/tree/main/OOP%20BANK-PROJECT"
  },
  {
    num: "08",
    category:"Web Development OOP Console Project",
    title: "OOP Console Project",
    description:
    "The “OOP Console Project” is a hands-on web development task where you create a console-based application using Object-Oriented Programming principles with HTML, CSS, and JavaScript. This project enhances your understanding of OOP concepts and console application development, making it a valuable addition to your coding portfolio.",
    stack:[{name:"HTML"},{name:"CSS"},{name:"JavaScript"},{name:"Typescript"}],
    image:"/assets/oop console project.png",	
    live:"",
    github:"https://github.com/Hafsa-Kamali/node---projects/tree/main/OOP%20CONSOLE-%20PROJECT"
  },
  {
    num: "09",
    category:"Quiz For Student Project",
    title: "Quiz For Student Project",
    description:
    "The “Quiz For Student Project” is an interactive web development task where you create a quiz application using HTML, CSS, and JavaScript. This project enhances your skills in user input handling and dynamic content generation, making it a valuable addition to your coding portfolio.",
    stack:[{name:"HTML"},{name:"CSS"},{name:"JavaScript"},{name:"Typescript"}],
    image:"/assets/Quiz for student.png",	
    live:"",
    github:"https://github.com/Hafsa-Kamali/node---projects/tree/main/QUIZ%20FOR%20STUDENT%20-PROJECT"
  },
  {
    num: "10",
    category:"Web Development Student Management Project",
    title: "Student Management Project",
    description:
    "The “Student Management Project” is a comprehensive web development task where you create a system to manage student data using HTML, CSS, and JavaScript. This project enhances your skills in data handling, user interface design, and CRUD operations, making it a valuable addition to your coding portfolio.",
    stack:[{name:"HTML"},{name:"CSS"},{name:"JavaScript"},{name:"Typescript"}],
    image:"/assets/student management.png",	
    live:"",
    github:"https://github.com/Hafsa-Kamali/node---projects/tree/main/STUDENT%20MANAGEMENT%20SYSTEM%20-PROJECT"
  },
  {
    num: "11",
    category:"To-Do List Project",
    title: " To-Do List Project",
    description:
    "The “To-Do List Project” is a practical web development task where you create a task management application using HTML, CSS, and JavaScript. This project enhances your skills in user interface design and data persistence, making it a valuable addition to your coding portfolio.",
    stack:[{name:"HTML"},{name:"CSS"},{name:"JavaScript"},{name:"Typescript"}],
    image:"/assets/to do list.png",	
    live:"",
    github:"https://github.com/Hafsa-Kamali/node---projects/tree/main/TODO%20LIST-PROJECT"
  },
  {
    num: "12",
    category:" Word-Counter Project",
    title: "Word-Counter Project",
    description:
    "The “Word-Counter Project” is a practical web development task where you create a tool to count words in a text using HTML, CSS, and JavaScript. This project enhances your skills in text processing and user interface design, making it a valuable addition to your coding portfolio.",
    stack:[{name:"HTML"},{name:"CSS"},{name:"JavaScript"},{name:"Typescript"}],
    image:"/assets/word counter pro.png",	
    live:"",
    github:"https://github.com/Hafsa-Kamali/node---projects/tree/main/WORD%20COUNTER%20-PROJECT"
  },
];

const Services = () => {
  const [project, setProject] = useState(projects[0]);
 
  const handleSlideChange =(swiper) => {
//get current slide index 
const currentIndex = swiper.activeIndex;
//update project state based on the current slide index
setProject(projects[currentIndex]);
  };
  return (
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition:{delay:2.4, duration:0.4, ease:"easeIn"},
     }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col 
            xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                {/*outline num*/}
                <div className="text-8xl leading-none font-extrabold text-transparent
                text-outline">{project.num}</div>
                {/*project category*/}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent
                transition-all duration-500 capitalize">
                  {project.category}
                  </h2>
                  {/*project description*/}
                  <p className="text-white/80">{project.description}</p>
                  {/*project stack*/}
                  <ul className="flex gap-4">{project.stack.map((item, index) =>{ 
                    return (
                    <li key={index} className="text-xl text-accent">{item.name}
                    {/*remove the last comma*/}
                    {index !== project.stack.length - 1 && ","}
                    </li>
                    );
                    }
                    )}</ul>
                    {/*border*/}
                    <div className="border border-white/30"></div>
                    {/*buttons*/}
                    <div className="flex items-center gap-4">
                      {/*live project button*/}
                      <Link href={project.live}>
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
                        {/*github project button*/}
                      <Link href={project.github}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full 
                          bg-white/10 flex justify-center items-center group">
                            <BsGithub className="text-white text-3xl group-hover:text-accent transition-all duration-500" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Github repository \</p>
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
                      {/*overlay*/}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/*image*/}
                      <div className="relative w-full h-full">
                        <Image src= {project.image}
                       fill
                      className="object-cover"
                      alt=""
                      />
                      </div>
                      </div>
                    </SwiperSlide>
                    
                );
                })}
                {/*slider buttons*/}
               <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
               btnStyles="rounded-full bg-white/10 group hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>
    );
  };
  export default Services;
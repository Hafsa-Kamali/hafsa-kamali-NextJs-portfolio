"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";


const works =[
  {
    num: '01',
    title : 'web development',
    description : 
    "i have a superset skill and command on the programming languages like HTML, CSS, JAVASCRIPT,Typescript,Nextjs, REACT. i have a good experience and also achieved many certificates in web development.  i have been working on some projects like e-commerce and web development.",
    href: "works/web-development",
  },
  {
    num: '02',
    title : 'Python-Ai Developer',
    description:
    "A certified python developer and Ai developer with a superset skill in the programming languages like python,pandas,numpy and streamlit. i have been working on some projects like web development, data science, machine learning, and Ai.",
   href: "works/python-ai-developer",
  },
  {
    num: '03',
    title : 'Graphic design',
    description:"Superset skill and trained certified graphic designer who has many creative ideas in mind related to posture,flyers, brochures, etc.and has been working on some projects.I know how to expertly handled with the adobe illustrator and photoshop.",
   href: "works/grapic-designer",
  },
  {
    num: '04',
    title : 'Film Editing and Animation',
    description:"Amazing creativity and command on the film editing and animation.i know how to deal with 3d movies animations ,great command on the editing of any 3d animation , film or video music script.a superset skill on the adobe premiere pro, after effect, and more.",
   href: "works/video-editing",
  },

];

import { motion } from "framer-motion";


const Work = () => {
  return ( 
  <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
     <div className="container mx-auto">
      <motion.div 
      initial ={{opacity:0}} 
      animate={{opacity:1, 
      transition:{delay:2.4, duration:0.4, ease:"easeIn"},
      }}
      className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
      >
        {works.map((work, index)=>{
          return(
            <div key={index}
            className="flex-1 flex flex-col justify-center gap-6 group">
              {/*top*/}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline
                 text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {work.num}
                 </div>
                <Link href={work.href}
                className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                 >
                <BsArrowDownRight className="text-primary text-3xl"/>
                </Link>
              </div>
             {/*title*/}
             <h2 className="text-[36px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{work.title}</h2>
             {/*description*/}
             <p className="text-white/80">{work.description}</p>
             {/*border*/}
             <div className="border-b border-white/20 w-full"></div>
            </div>
          );
        })}
        </motion.div>
        </div> 
    </section>
  );
};
export default Work;
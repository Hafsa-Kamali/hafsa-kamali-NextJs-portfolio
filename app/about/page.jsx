"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,

} from "react-icons/fa";
import { FaPython } from "react-icons/fa6";
import { SiTailwindcss, SiNextdotjs, SiAdobephotoshop, SiAdobepremierepro, SiAdobeillustrator, SiAdobeaftereffects} from "react-icons/si";

import Link from "next/link";
import Image from "next/image";
//about data 

const about = {
 title : "About Me",
 description:
 "Hello, this is Hafsa Kamali here.Iam a frontend web software developer with a super skill set in various programming languages like Html,Css, Javascript,Typescript, React and NextJs. I have a good experience and also achieved many certificates in web development. I have been working on some projects like e-commerce and web development.Iam also a graphic designer with an expert handling and superset skills & I have been working on some projects like logo design ,posture ,flyers , brochures of various brands.i also knows hoe to deal and expertly play and handled the film making ,video editing, animations, 3D animation movies,music editing and many more things.",
info:[
  {
    FieldName: "Name",
    FieldValue: "Hafsa Kamali",
  },
  {
    FieldName: "Phone",
    FieldValue: "(+92)3........0",
  },
  {
    FieldName: "Education",
    FieldValue: "Front-End Web Developer",
  },
  {
    FieldName: "Nationality",
    FieldValue: "Pakistani",
  },
  {
    FieldName: "E-mail",
    FieldValue: "hafsakamali362@gmail.com",
  },
  {
    FieldName: "Freelance",
    FieldValue: "Available",
  },
  {
    FieldName: "Languages",
    FieldValue: "English",
  },
]
};
const education ={
  title : "My Education",
 description:
 "I have completed my 10th class with 95% marks. I have completed my 12th class in pre-engineering with 90% marks and recently iam student of 2nd year Bachelor of Associate Degree In Arts program (ADA) in Karachi University.And iam also the student of Certified Cloud And Generative AI software engineering from the Governor Sindh IT initiative,web 3.0 and metaverse course. ",	
 items : [
  {
    institution : "Govt. Sindh IT Initiative (Governor House Karachi)",
    degree : "Certified Cloud And Generative AI software engineering",
    duration : "2023- present",
  },
  {
    institution : "Karachi University",
    degree : "Bachelor of Associate Degree In Arts program (ADA)",
    duration : "2022- present",
  },
  {
    institution : "Sir Syed girls college",
    degree : "pre-engineering",
    duration : "2021- 2023",
  },
  {
    institution : "Cambridge Public School",
    degree : "Matriculation",
    duration : "2019-2021",
  },

 ],


};
const skills = {
  title : "My Skills",
  description:
 "I have a good experience and also achieved many certificates in web development. I have been working on some projects like e-commerce and web development.Iam also a graphic designer with an expert handling and superset skills in a software like illustrator,Photoshop,Canva . I have been working on some projects like logo design ,posture ,flyers , brochures of various brands.i also knows hoe to deal and expertly play and handled the film making ,video editing, animations, 3D animation movies,music editing and many more things by the software like adobe Premiere pro and adobe After effects .",
  SkillList : [
    {
      icon : <FaHtml5 />,
      name : "HTML",
     
    },
    {
      icon : <FaCss3 />,
      name : "CSS",
      
    },
    {
      icon : <FaJs />,
      name : "Javascript",
      
    },
    {
      icon : <FaReact />,
      name : "React",
      
    },
    {
      icon : <FaNodeJs />,
      name : "NodeJs",

    },
    {
      icon : <SiTailwindcss />,
      name : "Tailwindcss",
      
    },
    {
      icon : <SiNextdotjs />,
      name : "NextJs",
      
    },
    {
      icon : <SiAdobephotoshop />,
      name : "Photoshop",

    },
    {
      icon : <SiAdobepremierepro />,
      name : "Premiere Pro",

    },
    {
      icon : <SiAdobeillustrator />,
      name : "Illustrator",
      },
      {
      icon : <SiAdobeaftereffects />,
      name : "After Effects",
      },
      {
        icon : <FaPython />,
        name : "Python",
      }
  ],
};

const Teams = {
  title : "My Team",
  description: 
  "Here is some team members of my zoom class that i have joined in my programming world.",
  members : [
    {
      name : "Mohammad Noman",
      role : "Web Developer",
      image : "/Avatar team/noman.PNG",
},
{
  name : "Iqra Ikram",
  role : "Web Developer",
  image : "/Avatar team/iqra.PNG",
},
{
  name : "Uzir Khilji",
  role : "Web Developer",
  image : "/Avatar team/uzair.PNG",
},
{
  name : "M.Mudassir",
  role : "Web Developer",
  image : "/Avatar team/mudassir.PNG",
},
{
  name : "Izhar Khan",
  role : "Web Developer",
  image : "/Avatar team/izhar.PNG",
},
{
  name : "AbdullahKashif",
  role : "Web Developer",
  image : "/Avatar team/abdullah.PNG",
},
{
  name : "Miss Zia",
  role : "Web Developer",
  image : "/Avatar team/miss zia.PNG",
},
{
  name : "Noor Fatima",
  role : "Web Developer",
  image : "/Avatar team/noor fatima.PNG",
},
{
  name : "Areeba Khilji",
  role : "Web Developer",
  image : "/Avatar team/areeba.PNG",
},
{
  name : "Harisa",
  role : "Web Developer",
  image : "/Avatar team/harisa.PNG",
},
{
  name : "Fiza Sagar",
  role : "Web Developer",
  image : "/Avatar team/fiza.PNG",
},
{
  name : "Ruba Haroon",
  role : "Web Developer",
  image : "/Avatar team/ruba.PNG",
},
  ]
};
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Tooltip, 
 TooltipContent,
 TooltipProvider,
 TooltipTrigger } from "@/components/ui/tooltip";

 import { ScrollArea } from "@/components/ui/scroll-area";
 import { motion } from "framer-motion";

import { BsGithub, BsLinkedin ,BsWebcam, BsYoutube, BsFacebook, BsInstagram } from "react-icons/bs";


const About = () => {
    return (
      <motion.div initial={{opacity:0}}
       animate={{opacity:1, 
        transition:{delay:2.4, duration:0.4, ease:"easeIn"},
    }}

    className="min-h-[80vh] flex  items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="about"
        className="flex flex-col xl:flex-row gap-[60px]"
        >
<TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
  <TabsTrigger value="about">About Me</TabsTrigger>
  <TabsTrigger value="education">Education</TabsTrigger>
  <TabsTrigger value="skills">Skills</TabsTrigger>
  <TabsTrigger value="Teams">My Team</TabsTrigger>
</TabsList>
{/*content*/}
<div className="min-h-[70vh] w-full">
  {/*about me*/ }
  <TabsContent value="about" className="w-full text-center xl:text-left hover:text-accent hover:scale-105 transition-all duration-500">
  <div className="flex flex-col gap-[30px]">
    <h3 className="text-4xl font-bold xl:text-5xl">{about.title}</h3>
    <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">{about.description}</p>
    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
      {about.info.map((item, index) => {
        return (
          <li key={index}> 
            <span className="text-white/60">{item.FieldName} : </span>
            <span className = "font-medium hover:text-accent">{item.FieldValue}</span>
          </li>
        );
      })}
    </ul>
  </div>
  </TabsContent>
 {/*education*/ }
 <TabsContent value="education" className="w-full">
 <div className="flex flex-col gap-[30px] text-center xl:text-left">
    <h3 className="text-4xl font-bold">{education.title}</h3>
    <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">{education.description}
    </p>
  <ScrollArea className="h-[400px]">
<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
  {education.items.map((item, index) => {
    return (<li 
    key={index}
    className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
    >
      <span className="text-accent">{item.duration}</span>
      <h3 className="text-xl max-w-[260px] min-h-[80px] text-center lg:text-left">{item.degree}</h3>
      <div className="flex items-center gap-3">
        {/*dot*/}
        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
        <p className="text-white/60">{item.institution}</p>
      </div>
    </li>
    );
})

}

</ul>
  </ScrollArea>
  
  
  </div>
 </TabsContent>

 {/*skills*/ }
 <TabsContent value="skills" className="w-full h-full">
  <div className="flex flex-col gap-[30px]">
    <div className="flex flex-col gap-[30px] text-center xl:text-left">
      <h3 className="text-4xl font-bold">{skills.title}</h3>
      <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">{skills.description}</p>
    </div>
    <ul className="grid grid-col-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
      {skills.SkillList.map((skill, index) => {
return ( <li key={index}>
  <TooltipProvider delayDuration={100}>
    <Tooltip>
      <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
        <div className="text-5xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
      </TooltipTrigger>
      <TooltipContent>
        <p className="capitalize">{skill.name}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>

</li>
);
      })}
    </ul>
  </div>
 </TabsContent>


{/*about team*/}
<TabsContent value="Teams" className="w-full text-center xl:text-left hover:text-accent transition-all duration-500">
  <div className="flex flex-col gap-[30px]">
    <h3 className="text-4xl font-bold xl:text-5xl">{Teams.title}</h3>
    <p className="max-w-[600px] text-white/80 mx-auto xl:mx-0">{Teams.description}</p>


    <div className="container px-10 py-15 mx-auto">
      <div>
    <ul  className=" grid xl:grid-cols-3  flex-col gap-6  text-center w-full mb-12" >
      {Teams.members.map((item, index) => {
return ( <li key={index}>
  <div className="flex flex-col m-3 p-2 gap-6 rounded-lg bg-gray-800 shadow-md w-[230px] h-[50px]">
      <div className="rounded-full-lg  gap-8 shadow-inner shadow-gray-400">
        <div className=" flex items-center border-1 border-gray-300 border p-1 rounded-lg ">
          <div  className="w-16 h-16 bg-white object-cover object-center flex-shrink-0 rounded-full mr-4/" >
            <Image src = {item.image} alt="team" className="w-16 h-16 object-cover rounded-full"
            width={100} height={100}
             />
          </div>
          <div className="flex-grow">
            <h2 className="text-white title-font font-medium">{item.name}</h2>
            <p className="text-accent-600">{item.role}</p>
          </div>
        </div>
      </div>
  </div>
</li>
);
      })}
    </ul>
    </div>
</div>
  </div>
</TabsContent>

  </div>
        </Tabs>
      </div>
      
      </motion.div>

    );  
};  export default About;
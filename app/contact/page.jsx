"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { 
  Select, 
  SelectContent,
  SelectGroup, 
  SelectItem, 
  SelectLabel,  
  SelectTrigger, 
  SelectValue
 } from "@/components/ui/select";
 
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    info: "(+92)3........0",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    info: "hafsakamali362@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    info: "123 Main St, Anytown, USA",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section 
    initial={{ opacity: 0 }}
     animate={{ opacity: 1, transition:{delay:2.4, duration:0.4, ease:"easeIn"},
    }}
    className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/*form*/}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let’s work together</h3>
              <p className="text-white/70">Get in touch with me. I’d love to hear about your project. Please fill out the form below with some info about your needs and I’ll get back to you as soon as possible.
              </p>
              {/*input*/}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="First Name" />
                <Input type="lastname" placeholder="Last Name" />
                <Input type="email" placeholder="Email Address" />
                <Input type="phone" placeholder="Phone Number" />
              </div>
              {/*select*/}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="service-1">Web Development</SelectItem>
                    <SelectItem value="service-2">Logo Design</SelectItem>
                    <SelectItem value="service-3">Graphic Design</SelectItem>
                    <SelectItem value="service-4">Video Editing & Film making animation</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/*textarea*/}
              <Textarea 
              className="h-[200px]"
              placeholder="Type Your Message here." 
              />
              {/*button*/}
              <Button size="md" className="max-w-40">
                Send Message
                </Button>
              </form>
          </div>
          {/*info*/}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-white/60">{item.title}</div>
                      <p className="text-xl">{item.info}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
            </div>
        </div>
      </div>
      </motion.section>
  );
};
export default Contact;
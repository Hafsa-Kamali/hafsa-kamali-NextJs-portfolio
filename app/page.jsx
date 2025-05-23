import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

{/*components*/}
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import Link from "next/link";

const Home = () => {
    return (
    <section className="h-full">
<div className="container mx-auto h-full">
<div className="flex flex-col xl:flex-row items-center justify-between xl:pt-4 XL:pb-24">
  
  {/*text*/}
  <div className="text-center xl:text-left order-2 xl:order-none">
    <span className="text-xl">Full-Stack Developer</span>
    <h1 className="h1 mb-6">
      Hello I,m <br /><span className="text-accent">Hafsa Kamali</span>
    </h1>
    <p className="max-w-[500px] mb-9 text-white/80">
    I excel at crafting elegant digital experiences and Iam proficient in various programming languages,technologies and frameworks.
     I am passionate about creating innovative solutions that solve real-world problems.
    </p>
{/*buttons and socials*/}
<div className="flex flex-col xl:flex-row items-center gap-8">
  <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 shadow-accent shadow-md hover:shadow-[#fff]/50"> 
   <Link href="https://drive.google.com/file/d/1wuup5qgBLHzfajb4gTM7PQ6j20NVyhWk/view?usp=sharing">Download CV</Link>
    <FiDownload className="text-xl"/>
  </Button>
  <div className="mb-8 xl:mb-0">
    <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full 
    flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary shadow-md shadow-[#0ef]
    hover:transition-all duration-500" />
  </div>
</div>
  </div>
  {/*image*/}
  <div className="order-1 xl:order-none mb-8 xl:mb-0">
    <Photo />
  </div>
</div>
</div>
<Stats />
   
    <footer class="text-gray-600 body-font">
    <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        
        <span class="ml-3 text-xl text-white">Hafsa Kamali</span>
      </a>
      <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 HafsaKamali —
        <a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@knyttneve</a>
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a class="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </footer>
  </section>
);
};

export default Home;
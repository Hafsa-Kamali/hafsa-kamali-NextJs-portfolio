"use client";

import CountUp from "react-countup";

const stats =[
    {
        num: 10,
        title: "Skills",
    
    },
    {
        num: 12,
        title: "Projects Completed",
    
    },
    {
        num: 100,
        title: "Certificates",
    
    },
    {
        num: 5,
        title: "Technologies handler",
    
    },
    {
        num: 40 ,
        title: "Zoom Meetings Attended",
    
    },
];
const Stats =()=>{
    return <section>
            <div className="container px-4 py-24 mx-auto"><br />
                <div className="flex flex-wrap -m-4 text-center gap-8 max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map((item, index) => {
                        return (
                        <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start" 
                        key={index}>
                            <CountUp 
                            end={item.num} 
                            duration={5}
                            delay={2} 
                            className="text-4xl xl:text-6xl font-extrabold"
                            />
                            <p className={`${item.title.length < 15 ? "max-w-[100px]":"max-w-[120px]"}
                                leading-snug text-white/80`}
                            >
                            {item.title}
                            </p>
                        </div>
                        );
                    })}
            
            </div>
        </div>
       
    </section>;
};
export default Stats;

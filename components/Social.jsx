import Link from "next/link";

import{ FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";

const socials = [
    {
        icon: <FaGithub />,
        path: "https://www.github.com/Hafsa-Kamali",
    },
    {
        icon: <FaLinkedinIn />,
        path: "https://www.linkedin.com/in/hafsakamali/",
    },
    {
        icon: <FaYoutube />,
        path: "https://www.youtube.com/@HAFSAKAMALI-19",
    },
    {
        icon: <FaTwitter />,
        path: "https://twitter.com/HafsaKamali632",
    },
    {
        icon: <FaFacebook />,
        path: "https://www.facebook.com/hafsa.kamali.07",
    },
    {
        icon: <FaInstagram />,
        path: "https://www.instagram.com/call_me_hafiii/",
    },
    {
        icon: <FaTelegram />,
        path: "https://www.telegram.com/hafsakamali2003",
    },
]
const Social = ({containerStyles, iconStyles}) => {
    return <div className={containerStyles}>
        {socials.map((item, index)=>{
            return <Link href={item.path} key={index} className={iconStyles}>
                {item.icon}
            </Link>
        })}
    </div>;
};
export default Social;
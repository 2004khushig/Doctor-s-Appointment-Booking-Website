import React from "react";
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.png";
// import{AiFillLinkedin} from "react-icons/ri";
import{AiFillYoutube,AiFillGithub,AiOutlineInstagram} from "react-icons/ai";

const socialLinks=[
    {
        path:"",
        icon:<AiFillYoutube className="group-hover:text-white w-4 h-5"/>
    },
    {
        path:"",
        icon:<AiFillGithub className="group-hover:text-white w-4 h-5"/>
    },
    {
        path:"",
        icon:<AiOutlineInstagram className="group-hover:text-white w-4 h-5"/>
    },
//     {
//         path:"",
//         icon:<AiFillLinkedin className="group-hover:text-white w-4 h-5"/>
//     },
]

const quickLinks01=[
    {
        path:"/home",
        name:"Home"
    },
    {
        path:"/",
        name:"About"
    },
    {
        path:"/services",
        name:"Services"
    },
    {
        path:"/",
        name:"Blog"
    },
];
const quickLinks02=[
    {
        path:"/fin-a-doctor",
        name:"Find a Doctor"
    },
    {
        path:"/",
        name:"Request An Appointment"
    },
    {
        path:"/",
        name:"Find a Location"
    },
    {
        path:"/",
        name:"Get an Option"
    },

];
const quickLinks03=[
    {
        path:"/",
        name:"Donate"
    },
    {
        path:"/contact",
        name:"Contact"
    },
];
const Footer=()=>{
    const year=new Date().getFullYear();
    return (
        <div>
            <footer className="pb-16 pt-10">
                <div className="container">
                    <div className="flex justify-between flex-col md:flex-row gap-[30px]">
                        <div>
                            <img src={logo} alt="logo" />
                            <p className="text-[16px] leading-7 font-[400] text-textColor">Copyright © {year} All rights reserved.</p>
                            <div className="flex items-center gap-3 mt-4">
                                {socialLinks.map((link,index)=>(
                                    <Link
                                    to={link.path}
                                    key={index}
                                    className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none">{link.icon }</Link>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">Quick Links</h2>
                            <ul>
                                {quickLinks01.map((link,index)=>(
                                    <li key={index} className="mb-4">
                                        <Link to={link.path} className="text-[16px] leading-7 font-[400] text-textColor">{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">Want to:</h2>
                            <ul>
                                {quickLinks02.map((link,index)=>(
                                    <li key={index} className="mb-4">
                                        <Link to={link.path} className="text-[16px] leading-7 font-[400] text-textColor">{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">Support</h2>
                            <ul>
                                {quickLinks03.map((link,index)=>(
                                    <li key={index} className="mb-4">
                                        <Link to={link.path} className="text-[16px] leading-7 font-[400] text-textColor">{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                </div>

            </footer>
        </div>
    )
}
export default Footer;
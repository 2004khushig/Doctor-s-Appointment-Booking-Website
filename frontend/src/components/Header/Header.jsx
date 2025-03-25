import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";
import logo from "../../assets/images/logo.png";
import userImg from "../../assets/images/avatar-icon.png";
import {BiMenu} from 'react-icons/bi';


const navlinks = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/doctors',
        display: 'Find A Doctor'
    },
    {
        path: '/services',
        display: 'Services'
    },
    {
        path: '/contact',
        display: 'Contact'
    }
]
const Header = () => {
    return (
        <header className="header flex items-center">
            <div className="container">
                <div className="flex items-center justify-between">
                    <div>
                        <img src={logo} alt="" />
                    </div>
                    <div className="navigation">
                        <ul className="menu flex items-center gap-[2.7rem]">
                            {navlinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={link.path}
                                        className={navClass =>
                                            navClass.isActive
                                                ? 'text-primaryColor text-[16px] leading-7 font-[600]'
                                                : 'text-textColor text-[16px] leading-7 font-[600] hover:text-primaryColor'
                                        }
                                    >
                                        {link.display}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex itmems-centre gap-4">
                        <div>
                            <Link to="/">
                                <figure className="w-[35px] h-[35px] mt-1 rounded-full cursor-pointer">
                                    <img src={userImg} className="w-full rounded-full" alt="" />
                                </figure>
                            </Link>
                        </div>
                        <Link to="/login">
                        <button className="bg-primaryColor py-2 px-6 mt-1 text-white font-[300] h-[33px] flex items-center justify-center rounded-[50px]">Login</button>  
                        </Link>
                        <span className="md:hidden">
                            <BiMenu className="w-6 h-6 cursor-pointer"/>
                        </span>

                    </div>

                </div>
            </div>
        </header>
    )
}
export default Header;
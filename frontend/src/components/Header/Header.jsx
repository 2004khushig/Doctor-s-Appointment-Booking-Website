import React, { useEffect, useRef, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import userImg from "../../assets/images/avatar-icon.png";
import { BiMenu } from 'react-icons/bi';
import { AuthContext } from "../../context/AuthContext";

const navlinks = [
    { path: '/home', display: 'Home' },
    { path: '/doctors', display: 'Find A Doctor' },
    { path: '/services', display: 'Services' },
    { path: '/contact', display: 'Contact' }
];

const Header = () => {
    const headerRef = useRef(null);
    const menuRef = useRef(null);
    const { user, role, token } = useContext(AuthContext);

    const handleStickyHeader = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header');
            }
            else {
                headerRef.current.classList.remove('sticky__header');
            }
        });
    };

    useEffect(() => {
        handleStickyHeader();
        return () => window.removeEventListener('scroll', handleStickyHeader);
    }, []);

    const toggleMenu = () => {
        menuRef.current?.classList.toggle("show__menu");
    };

    return (
        <header className="header flex items-center mb-10" ref={headerRef}>
            <div className="container">
                <div className="flex items-center justify-between">
                    <div>
                        <img src={logo} alt="Logo" className="w-[150px]" />
                    </div>
                    <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                        <ul className="menu flex items-center gap-[2.7rem]">
                            {navlinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) =>
                                            isActive
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
                    <div className="flex items-center gap-4">
                        {
                            token && user ? (
                                <div className="flex items-center gap-2">
                                    <Link to={`${role === 'doctor' ? '/doctors/profile/me' : 'user/profile/me'}`} className="flex items-center gap-2">
                                        <figure className="w-[40px] h-[40px] rounded-full cursor-pointer overflow-hidden">
                                            <img src={user?.photo || userImg} className="w-full h-full object-cover" alt="User Avatar" />
                                        </figure>
                                        <h2 className="text-[16px] font-medium text-headingColor">{user?.name}</h2>
                                    </Link>
                                </div>
                            ) : (
                                <Link to="/login">
                                    <button className="bg-primaryColor py-2 px-6 mt-1 text-white font-[300] h-[33px] flex items-center justify-center rounded-[50px]">
                                        Login
                                    </button>
                                </Link>
                            )
                        }
                        <span className="md:hidden" onClick={toggleMenu}>
                            <BiMenu className="w-6 h-6 cursor-pointer" />
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

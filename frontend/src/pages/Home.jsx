import React from "react";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png"
import icon02 from "../assets/images/icon02.png"
import icon03 from "../assets/images/icon03.png"
import {Link} from "react-router-dom"
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/about.jsx";
import ServiceList from "../components/Services/ServiceList.jsx";




const Home = () => {
    return (
        <div>
            <section className="hero__section pt-[10px] 2xl:h-[800px]">
                <div className="container">
                    <div className="flex flex-col lg:flex-row lg:gap-[90px] items-start justify-start">
                        <div className="lg:flex-1 ml-10 text-left">
                            <div className="lg:w-[570px]">
                                <h1 className="text-[36px]  leading-[46px] font-bold text-headingColor font-[800] md:text-[50px] md:leading-[70px]">
                                    We help patients live a healthy, longer life
                                </h1>
                                <p className="text__para mt-2">
                                    Our website simplifies healthcare access by allowing users to schedule appointments online, browse specialists, and receive instant confirmations—ensuring fast, convenient, and hassle-free medical consultations anytime, anywhere.
                                </p>
                                <button className="btn mt-4">Request an Appointment</button>
                            </div>

                            
                            <div className="mt-[15px] lg:mt-[15px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                                <div>
                                    <h2 className="text-[36px] leading-[56px] lg:text-[33px] lg:leading-[54px] font-[700] text-headingColor">30+</h2>
                                    <span className="w-[100px] h-2 mb-1 bg-yellowColor rounded-full block mt-[-14px]"></span>
                                    <p className="text__para">Years of Experience</p>
                                </div>
                                <div>
                                    <h2 className="text-[36px] leading-[56px] lg:text-[33px] lg:leading-[54px] font-[700] text-headingColor">15+</h2>
                                    <span className="w-[100px] h-2 mb-1 bg-purpleColor rounded-full block mt-[-14px]"></span>
                                    <p className="text__para">Clinic Locations</p>
                                </div>
                                <div>
                                    <h2 className="text-[36px] leading-[56px] lg:text-[33px] lg:leading-[54px] font-[700] text-headingColor">100%</h2>
                                    <span className="w-[100px] h-2 mb-1 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                                    <p className="text__para">Patient Satisfaction</p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:flex-1 flex gap-[30px] justify-end mr-10">
                            <div>
                                <img className="w-full" src={heroImg01} alt="" />
                            </div>
                            <div className="mt-[30px]">
                                <img src={heroImg02} alt="" className="w-full mb-[30px]" />
                                <img src={heroImg03} alt="" className="w-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="lg:w-[470px] mx-auto">
                        <h2 className="heading text-center text-[40px]">
                            Providing the best healthcare services
                        </h2>
                        <p className="text__para text-center">World-class care for everyone. Our health system offers unmatched, expert health care</p>

                    </div>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px]
                mt-[30px] lg:mt-[55px]">
                    <div className="py-[30px] px-5">
                        <div className="flex items-center justify-center">
                            <img src={icon01} alt="" />
                        </div>
                        <div className="mt-[30px]">
                            <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                                Find A Doctor
                            </h2>
                            <p className="text-[16px] leading-7 text-textColor font-[400] text-center">Find support according to your needs specially delivered for you. Look for any lab or clinic.</p>
                            <Link to="/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                            <BsArrowRight className="group-hover:text-white w-6 h-5"/>
                            </Link>

                        </div>

                    </div>
                    <div className="py-[30px] px-5">
                        <div className="flex items-center justify-center">
                            <img src={icon02} alt="" />
                        </div>
                        <div className="mt-[30px]">
                            <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                                Find Nearest Location
                            </h2>
                            <p className="text-[16px] leading-7 text-textColor font-[400] text-center">Easily locate the nearest healthcare facility or clinic with our advanced search tool. Check availability and book your visit.</p>
                            <Link to="/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                            <BsArrowRight className="group-hover:text-white w-6 h-5"/>
                            </Link>

                        </div>

                    </div>
                    <div className="py-[30px] px-5">
                        <div className="flex items-center justify-center">
                            <img src={icon03} alt="" />
                        </div>
                        <div className="mt-[30px]">
                            <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                                Book An Appointment
                            </h2>
                            <p className="text-[16px] leading-7 text-textColor font-[400] text-center">Schedule your appointment with ease. Choose your preferred doctor, select a time that works for you, and get instant confirmation!</p>
                            <Link to="/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                            <BsArrowRight className="group-hover:text-white w-6 h-5"/>
                            </Link>

                        </div>

                    </div>

                </div>
            </section>
            <About/>

            {/*===========service section================== */}

            <section>
                <div className="container">
                    <div className="xl:w-[470px] mx-auto">
                        <h2 className="heading text-center">Our Medical Services</h2>
                        <p className="text__para text-center mt-4">
                        We offer a wide range of medical services, including general consultations, specialized treatments, diagnostic testing, and preventive care. Our dedicated team ensures personalized attention and high-quality care for every patient.
                        </p>
                    </div>
                    <ServiceList/>
                </div>
            </section>
            {/*===========service section end================== */}
        </div>
    );
};

export default Home;

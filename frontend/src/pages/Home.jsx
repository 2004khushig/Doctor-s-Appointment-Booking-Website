import React from "react";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png"
import icon02 from "../assets/images/icon02.png"
import icon03 from "../assets/images/icon03.png"
import faqImg from '../assets/images/faq-img.png'
import featureImg from "../assets/images/feature-img.png"
import videoIcon from "../assets/images/video-icon.png"
import avatarIcon from "../assets/images/avatar-icon.png"
import { Link } from "react-router-dom"
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About.jsx";
import ServiceList from "../components/Services/ServiceList.jsx";
import DoctorList from "../components/Doctors/DoctorList.jsx";
import FaqList from "../components/Faq/FaqList.jsx";
import Testimonial from "../components/Testimonial/Testimonial.jsx";




const Home = () => {
    return (
        <div>
            <section className="hero__section pt-[10px] 2xl:h-[800px]">
                <div className="container">
                    <div className="flex flex-col lg:flex-row lg:gap-[90px] items-start justify-start">
                        <div className="lg:flex-1  text-left">
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
                                <BsArrowRight className="group-hover:text-white w-6 h-5" />
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
                                <BsArrowRight className="group-hover:text-white w-6 h-5" />
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
                                <BsArrowRight className="group-hover:text-white w-6 h-5" />
                            </Link>

                        </div>

                    </div>

                </div>
            </section>
            <About />

            {/*===========service section================== */}

            <section>
                <div className="container">
                    <div className="xl:w-[470px] mx-auto">
                        <h2 className="heading text-center">Our Medical Services</h2>
                        <p className="text__para text-center mt-4">
                            We offer a wide range of medical services, including general consultations, specialized treatments, diagnostic testing, and preventive care. Our dedicated team ensures personalized attention and high-quality care for every patient.
                        </p>
                    </div>
                    <ServiceList />
                </div>
            </section>
            {/*===========service section end================== */}

            {/*===========feature section================== */}
            <section>
                <div className="container mx-auto">
                    <div className="flex items-center justify-start flex-col lg:flex-row gap-10 pl-20">
                        {/* Text Section */}
                        <div className="flex-1 text-left">
                            <h2 className="heading mb-3">
                                Get virtual treatment <br /> anytime.
                            </h2>
                            <ul className="pl-7">
                                <li className="text__para">1. Schedule the appointment directly.</li>
                                <li className="text__para">2. Select your physician and directly contact their office.</li>
                                <li className="text__para">3. Filter out doctors who are taking new patients and schedule your appointment at your convenient time.</li>
                            </ul>
                            <Link to="/">
                                <button className="btn">Learn More</button>
                            </Link>
                        </div>

                        <div className="relative z-10 flex-1 flex justify-start">
                            <img src={featureImg} className="w-full max-w-[500px]" alt="" />

                            <div className="w-[220px] lg:w-[248px] bg-white absolute bottom-[1%] left-[-20%] z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px] shadow-lg">

                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-[6px] lg:gap-3">
                                        <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                                            Tue, 25
                                        </p>
                                        <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                                            10:00 AM
                                        </p>
                                    </div>
                                    <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded">
                                        <img src={videoIcon} alt="" className="w-3 h-3 lg:w-5 lg:h-5" />
                                    </span>
                                </div>
                                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                                    Consultation
                                </div>
                                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                                    <img src={avatarIcon} alt="" />
                                    <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                                        Timothy Clifford
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*===========feature section end=================*/}
            {/*===========doctor's section=================*/}
            <section>
                <div className="container">
                    <div className="xl:w-[470px] mx-auto">
                        <h2 className="heading text-center">Meet Our Doctors</h2>
                        <p className="text__para text-center mt-4">
                            Our system connect doctors from all around the world with expertise in different fields. You can find the best doctor for your needs and schedule an appointment with them.
                        </p>
                    </div>
                    <DoctorList />
                </div>
            </section>
            {/*===========doctor's section end=================*/}

            {/*===========faq section=================*/}
            <section>
                <div className="container">
                    <div className="flex justify-between gap-[50px] lg:gap-0">
                        <div className="w-[40%] hidden md:block ml-20">
                            <img src={faqImg} alt="" />
                        </div>
                        <div className="w-full md:w-1/2 mt-[50px]">
                            <h2 className="heading">Frequent questions asked by our patients</h2>
                            <FaqList />

                        </div>
                    </div>
                </div>
            </section>
            {/*===========faq section end=================*/}
            {/*===========testimonial=================*/}

            <section>
                <div className="container">
                <div className="xl:w-[480px] mx-auto">
                        <h2 className="heading text-center">What Our Patients Say</h2>
                        <p className="text__para text-center mt-4">
                            Here are some personalized views and feedback from our patients. We are always happy to hear from you. Their feedback is very important for us to improve our services and provide you with the best experience.
                        </p>
                    </div>
                    <Testimonial/>
                </div>
            </section>
            {/*===========testimonial end=================*/}
        </div>
    );
};

export default Home;

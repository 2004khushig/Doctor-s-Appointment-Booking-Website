import React, { useState } from "react";
import doctorImg from "../../assets/images/doctor-img02.png";
import starIcon from "../../assets/images/Star.png";
import DoctorAbout from "./DoctorAbout";
import Feedback from "./Feedback";
const DoctorDetails = () => {
    const [tab, setTab] = useState("about");

    return (
        <div>
            <section>
                <div className="max-w-[1300px] px-5 mx-auto">
                    <div className="grid md:grid-cols-3 gap-[40px]">
                        <div className="md:col-span-2">
                            <div className="flex items-start gap-6">
                                <figure className="w-[180px] h-[180px] flex-shrink-0">
                                    <img src={doctorImg} alt="" className="w-full h-full object-cover rounded-lg" />
                                </figure>
                                <div className="flex flex-col gap-3 w-full">
                                    <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-4 text-[14px] font-semibold rounded-md self-start">
                                        Surgeon
                                    </span>
                                    <h3 className="text-headingColor text-[24px] font-bold">Dr. Caleb Smith</h3>
                                    <div className="flex items-center gap-3">
                                        <span className="flex items-center text-[16px] font-semibold text-headingColor">
                                            <img src={starIcon} alt="" className="w-5 h-5" /> 4.8
                                        </span>
                                        <span className="text-[14px] text-gray-500">(272 Reviews)</span>
                                    </div>
                                    <p className="text-[16px] leading-6 text-gray-600 max-w-[850px]">
                                        Highly skilled surgeon with over 10 years of experience in the medical field, specializing 
                                        in minimally invasive procedures to ensure the best patient outcomes.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 border-b border-gray-300">
                                <button
                                    onClick={() => setTab("about")}
                                    className={`py-2 px-6 text-[16px] font-semibold transition ${
                                        tab === "about"
                                            ? "border-b-2 border-primaryColor text-primaryColor"
                                            : "text-gray-600 hover:text-primaryColor"
                                    }`}
                                >
                                    About
                                </button>
                                <button
                                    onClick={() => setTab("feedback")}
                                    className={`py-2 px-6 text-[16px] font-semibold transition ${
                                        tab === "feedback"
                                            ? "border-b-2 border-primaryColor text-primaryColor"
                                            : "text-gray-600 hover:text-primaryColor"
                                    }`}
                                >
                                    Feedback
                                </button>
                            </div>
                            <div className="mt-[50px]">
                                {
                                    tab==='about' && <DoctorAbout/>
                                }
                                {
                                    tab==='feedback' && <Feedback/>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DoctorDetails;

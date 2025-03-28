import React from "react";
import aboutImg from "../../assets/images/about.png"
import aboutCardImg from "../../assets/images/about-card.png"
import {Link} from "react-router-dom"

const About = () => {
    return (
        <div className=" ml-10 mr-10">
            <section>
                <div className="container">
                    <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
                        <div className="relative ml-10 w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                            <img src={aboutImg} alt="" />
                            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
                                <img src={aboutCardImg} alt="" />
                            </div>
                        </div>

                        {/*=============about content=========== */}
                        <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                            <h2 className="heading">Proud to be nation's one of the best</h2>
                            <p className="text__para mt-10">
                                For 30 years in a row, we have been dedicated to providing exceptional healthcare services, ensuring the well-being of our community with compassion and expertise. Our commitment to excellence drives us to continuously improve and innovate, staying at the forefront of medical advancements to deliver the best possible care to our patients.
                            </p>
                            <p className="text__para mt-[30px]">
                                Our best is something we strive for every day, combining innovation, dedication, and care to meet the needs of our patients and their families. We believe in fostering trust and building lasting relationships with those we serve, ensuring that every individual receives personalized attention and the highest standard of care. By working together as a team, we aim to create a positive impact on the lives of those who rely on us, making a difference in our community and beyond.
                            </p>
                            <Link to="/">
                            <button className="btn">Learn More</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;
import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const ServiceCard = ({ item }) => {
    const { name, desc, bgColor, textColor } = item;

    return (
        <div 
            className={`py-[30px] px-5 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col items-center border-2`} 
            style={{ borderColor: bgColor, backgroundColor: "#fff" }}
        >
            <h2 className="text-[26px] leading-9 font-[700] text-center" style={{ color: textColor }}>
                {name}
            </h2>
            <p className="text-[16px] leading-7 font-[400] mt-4 text-center text-gray-600">
                {desc}
            </p>
            <div className="mt-6 flex justify-center">
                <Link 
                    to="/doctors" 
                    className="w-[44px] h-[44px] rounded-full border-2 flex items-center justify-center group hover:bg-primaryColor transition-all duration-300"
                    style={{ borderColor: bgColor }}
                >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" style={{ color: textColor }} />
                    
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;

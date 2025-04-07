import React, { useState } from "react";

const Login = () => {
    const [formData,setFormData] = useState({
        email:"",
        password:""
    });
    const handleInputChange=e=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    return(
        <div>
            <section className="px-5 lg:px-0">
                <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
                    <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
                        Hello!
                        <span className="text-primaryColor"> Welcome</span> Back

                    </h3>

                </div>

            </section>
        </div>
    )
}
export default Login;
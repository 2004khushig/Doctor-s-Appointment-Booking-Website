import {useEffect, useState} from 'react';
import {useNavigate } from "react-router-dom";
import uploadImageToCloudinary from "../../utils/uploadCloudinary";
import {BASE_URL,token} from "../../config";
import {toast} from "react-toastify";
import HashLoader from 'react-spinners/HashLoader'

const Profile = ({user}) => {
const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    bloodType:"",
    gender: "male",
    photo: null,
  });
  const navigate=useNavigate();
  useEffect(()=>{
    setFormData({name:user.name,email:user.email,photo:user.photo,gender:user.gender,bloodType:user.bloodType})
  },[user])

  
  const handleTextInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

 
  const handleFileInputChange = async event => {
    const file = event.target.files[0];
    const data=await uploadImageToCloudinary(file);
    // console.log(data);
    setSelectedFile(data.url);
    setFormData({...formData, photo: data.url});

  };

  const handleSubmit = async event => {
    event.preventDefault();
    setLoading(true);
    try{
      const res=await fetch(`${BASE_URL}/users/${user._id}`,{
        method:'put',
        headers:{
          'Content-Type':'application/json',
          Authorization: `Bearer ${token}`
        },
        body:JSON.stringify(formData)
      })
      const {message}=await res.json();
      if(!res.ok){
        throw new Error(message);

      }
      setLoading(false)
      toast.success(message)
      navigate("/user/profile/me")

    }
    catch(err){
      toast.error(err.message)
      setLoading(false)
    }
  };
    return (
        <div className='mt-4'>
             <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleTextInputChange}
                    className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                  />
                </div>

                <div className="mb-5">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleTextInputChange}
                    className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer" aria-readonly readOnly 
                  />

                </div>
                <div className="mb-5">
                  <input
                    type="text"
                    placeholder="Blood Type"
                    name="bloodType"
                    value={formData.bloodType}
                    onChange={handleTextInputChange}
                    className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                  />
                </div>
                <div className="mb-5">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleTextInputChange}
                    className="w-full px-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor rounded-md cursor-pointer"
                  />
                </div>
                

                <div className="mb-5 flex items-center justify-between">
                   

                  <label className="text-headingColor font-bold text-[16px] leading-7">
                    Gender:
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleTextInputChange}
                      className="ml-2 text-textColor font-semibold text-[15px] leading-7 px-4 py-2 focus:outline-none rounded-md"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </label>
                </div>

                <div className="mb-5 flex items-center gap-3">
                  {formData.photo && <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
                    <img src={formData.photo} alt="Avatar" className="w-full rounded-full" />
                  </figure>}

                  <div className="relative w-[130px] h-[50px]">
                    <input
                      type="file"
                      name="photo"
                      id="customFile"
                      accept=".jpg, .png"
                      onChange={handleFileInputChange}
                      className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <label
                      htmlFor="customFile"
                      className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
                    >
                      {selectedFile?selectedFile.name:"Upload Photo"}
                    </label>
                  </div>
                </div>

                <div className="mt-7">
                  <button
                  disabled={loading && true}
                    type="submit"
                    className="w-full bg-primaryColor text-white text-[18px] leading-[20px] rounded-md px-4 py-3"
                  >
                    {loading?<HashLoader size={35} color='#ffffff'/>:"Update"}
                  </button>
                </div>

              </form>
        </div>
    );
};

export default Profile;
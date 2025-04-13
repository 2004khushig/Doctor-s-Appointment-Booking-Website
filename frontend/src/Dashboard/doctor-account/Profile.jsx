import React, { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

const Profile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bio: '',
    gender: '',
    specialization: '',
    ticketPrice: 0,
    qualifications: [{ startingDate: '', endingDate: '', degree: '', university: '' }],
    experiences: [{ startingDate: '', endingDate: '', position: '', hospital: '' }],
    timeSlots: [{ day: '', startingTime: '', endingTime: '' }],
    about: '',
    photo: null
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, photo: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const updateProfileHandler = async (e) => {
    e.preventDefault();
    // Add submit logic
  };

  const addItem = (key, item) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: [...prevFormData[key], item]
    }));
  };

  const addQualification = (e) => {
    e.preventDefault();
    addItem('qualifications', {
      startingDate: '',
      endingDate: '',
      degree: '',
      university: ''
    });
  };

  const addExperience = (e) => {
    e.preventDefault();
    addItem('experiences', {
      startingDate: '',
      endingDate: '',
      position: '',
      hospital: ''
    });
  };

  const addTimeSlot = (e) => {
    e.preventDefault();
    addItem('timeSlots', {
      day: '',
      startingTime: '',
      endingTime: ''
    });
  };

  const handleNestedChange = (e, index, key) => {
    const updatedArray = [...formData[key]];
    updatedArray[index][e.target.name] = e.target.value;
    setFormData({ ...formData, [key]: updatedArray });
  };

  const removeNestedItem = (index, key) => {
    const updatedArray = [...formData[key]];
    updatedArray.splice(index, 1);
    setFormData({ ...formData, [key]: updatedArray });
  };

  return (
    <div>
      <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">Profile Information</h2>
      <form>
        <div className="mb-5">
          <p className="form__label">Name*</p>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="form__input" placeholder="Full Name" />
        </div>
        <div className="mb-5">
          <p className="form__label">Email</p>
          <input type="email" name="email" value={formData.email} className="form__input" placeholder="Email" readOnly disabled />
        </div>
        <div className="mb-5">
          <p className="form__label">Phone*</p>
          <input type="number" name="phone" value={formData.phone} onChange={handleInputChange} className="form__input" placeholder="Phone Number" />
        </div>
        <div className="mb-5">
          <p className="form__label">Bio*</p>
          <input type="text" name="bio" value={formData.bio} onChange={handleInputChange} maxLength={100} className="form__input" placeholder="About" />
        </div>

        {/* Gender, Specialization, Price */}
        <div className="grid grid-cols-3 gap-5 mb-5">
          <div>
            <p className="form__label">Gender</p>
            <select name="gender" value={formData.gender} onChange={handleInputChange} className="form__input py-3.5">
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Others</option>
            </select>
          </div>
          <div>
            <p className="form__label">Specialization*</p>
            <select name="specialization" value={formData.specialization} onChange={handleInputChange} className="form__input py-3.5">
              <option value="">Select</option>
              <option value="surgeon">Surgeon</option>
              <option value="neurologist">Neurologist</option>
              <option value="dermatologist">Dermatologist</option>
              <option value="radiologist">Radiologist</option>
            </select>
          </div>
          <div>
            <p className="form__label">Appointment Price</p>
            <input type="number" name="ticketPrice" value={formData.ticketPrice} onChange={handleInputChange} className="form__input" placeholder="1000" />
          </div>
        </div>

        {/* Qualifications */}
        <div className="mb-5">
          <p className="form__label">Qualifications</p>
          {formData.qualifications.map((item, index) => (
            <div key={index}>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="form__label">Starting Date</p>
                  <input type="date" name="startingDate" value={item.startingDate} onChange={(e) => handleNestedChange(e, index, 'qualifications')} className="form__input" />
                </div>
                <div>
                  <p className="form__label">Ending Date</p>
                  <input type="date" name="endingDate" value={item.endingDate} onChange={(e) => handleNestedChange(e, index, 'qualifications')} className="form__input" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="form__label">Degree</p>
                  <input type="text" name="degree" value={item.degree} onChange={(e) => handleNestedChange(e, index, 'qualifications')} className="form__input" />
                </div>
                <div>
                  <p className="form__label">University</p>
                  <input type="text" name="university" value={item.university} onChange={(e) => handleNestedChange(e, index, 'qualifications')} className="form__input" />
                </div>
              </div>
              <button type="button" onClick={() => removeNestedItem(index, 'qualifications')} className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer">
                <AiOutlineDelete />
              </button>
            </div>
          ))}
          <button onClick={addQualification} className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer">Add Qualification</button>
        </div>

        {/* Experiences */}
        <div className="mb-5">
          <p className="form__label">Experiences</p>
          {formData.experiences.map((item, index) => (
            <div key={index}>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="form__label">Starting Date</p>
                  <input type="date" name="startingDate" value={item.startingDate} onChange={(e) => handleNestedChange(e, index, 'experiences')} className="form__input" />
                </div>
                <div>
                  <p className="form__label">Ending Date</p>
                  <input type="date" name="endingDate" value={item.endingDate} onChange={(e) => handleNestedChange(e, index, 'experiences')} className="form__input" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="form__label">Position</p>
                  <input type="text" name="position" value={item.position} onChange={(e) => handleNestedChange(e, index, 'experiences')} className="form__input" />
                </div>
                <div>
                  <p className="form__label">Hospital</p>
                  <input type="text" name="hospital" value={item.hospital} onChange={(e) => handleNestedChange(e, index, 'experiences')} className="form__input" />
                </div>
              </div>
              <button type="button" onClick={() => removeNestedItem(index, 'experiences')} className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer">
                <AiOutlineDelete />
              </button>
            </div>
          ))}
          <button onClick={addExperience} className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer">Add Experience</button>
        </div>

        {/* Time Slots */}
        <div className="mb-5">
          <p className="form__label">Time Slots</p>
          {formData.timeSlots.map((item, index) => (
            <div key={index} className="grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5">
              <div>
                <p className="form__label">Day</p>
                <select name="day" value={item.day} onChange={(e) => handleNestedChange(e, index, 'timeSlots')} className="form__input py-3.5">
                  <option value="">Select</option>
                  <option value="monday">Monday</option>
                  <option value="tuesday">Tuesday</option>
                  <option value="wednesday">Wednesday</option>
                  <option value="thursday">Thursday</option>
                  <option value="friday">Friday</option>
                  <option value="saturday">Saturday</option>
                  <option value="sunday">Sunday</option>
                </select>
              </div>
              <div>
                <p className="form__label">Starting Time</p>
                <input type="time" name="startingTime" value={item.startingTime} onChange={(e) => handleNestedChange(e, index, 'timeSlots')} className="form__input" />
              </div>
              <div>
                <p className="form__label">Ending Time</p>
                <input type="time" name="endingTime" value={item.endingTime} onChange={(e) => handleNestedChange(e, index, 'timeSlots')} className="form__input" />
              </div>
              <div className="flex items-center">
                <button type="button" onClick={() => removeNestedItem(index, 'timeSlots')} className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px] cursor-pointer">
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}
          <button onClick={addTimeSlot} className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer">Add Time Slot</button>
        </div>

        {/* About */}
        <div className="mb-5">
          <p className="form__label">About</p>
          <textarea name="about" rows={5} value={formData.about} onChange={handleInputChange} className="form__input" placeholder="Write about you" />
        </div>

        {/* Photo Upload */}
        <div className="mb-5 flex items-center gap-3">
          {formData.photo && (
            <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center">
              <img src={formData.photo} alt="Avatar" className="w-full rounded-full" />
            </figure>
          )}
          <div className="relative w-[130px] h-[50px]">
            <input type="file" name="photo" id="customFile" accept=".jpg, .png" onChange={handleFileInputChange} className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" />
            <label htmlFor="customFile" className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 bg-[#0066ff46] text-headingColor font-semibold rounded-lg cursor-pointer">
              Upload Photo
            </label>
          </div>
        </div>

        <div className="mt-7">
          <button type="submit" onClick={updateProfileHandler} className="bg-primaryColor text-white text-[18px] w-full py-3 px-4 rounded-lg">
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;

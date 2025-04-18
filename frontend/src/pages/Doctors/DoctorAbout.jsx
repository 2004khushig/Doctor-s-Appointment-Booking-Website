import React from 'react';
import { formatDate } from '../../utils/formatDate';

const DoctorAbout = ({ doctor }) => {
  if (!doctor) return null;

  const { name, about, qualifications, experiences } = doctor;

  return (
    <div>
      {/* About Section */}
      <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
          About of <span className='text-irisBlueColor font-bold text-[24px] leading-9'>Dr. {name}</span>
        </h3>
        <p className='text__para mt-2'>{about}</p>
      </div>

      {/* Education Section */}
      <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Education</h3>
        <ul className='pt-4 md:p-5'>
          {qualifications?.map((item, index) => (
            <li
              key={index}
              className='flex mb-3 flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5'
            >
              <div>
                <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                  {formatDate(item.startingDate)} - {formatDate(item.endingDate)}
                </span>
                <p className='text-[16px] leading-6 font-medium text-textColor'>{item.degree}</p>
              </div>
              <p className='text-[14px] leading-5 font-medium text-textColor'>{item.university}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Experience Section */}
      <div className='mt-12'>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Experience</h3>
        <ul className='pt-4 md:p-5'>
          {experiences?.map((item, index) => (
            <li key={index} className='p-4 rounded bg-[#fff9ea] mb-2'>
              <div>
                <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                  {formatDate(item.startingDate)} - {formatDate(item.endingDate)}
                </span>
                <p className='text-[16px] leading-6 font-medium text-textColor'>{item.position}</p>
              </div>
              <p className='text-[14px] leading-5 font-medium text-textColor'>{item.hospital}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;

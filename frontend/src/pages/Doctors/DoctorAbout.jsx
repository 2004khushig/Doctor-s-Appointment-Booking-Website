import React from 'react';
import { formatDate } from '../../utils/formatDate';
const DoctorAbout = () => {
    return (
        <div>
            <div>
                <div>
                    <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'> About of
                        <span className='text-irisBlueColor font-bold text-[24px] leading-9'>Dr. Caleb Smith</span>
                    </h3>
                </div>
                <p className='text__para mt-2'>
                    Dr. Caleb Smith is a renowned physician with over 15 years of experience in the medical field. He specializes in internal medicine and is dedicated to providing compassionate and comprehensive care to his patients. Dr. Smith is known for his patient-centered approach and commitment to advancing healthcare through continuous learning and innovation.
                </p>
            </div>
            <div className='mt-12'>
                <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Education</h3>
                <ul className='pt-4 md:p-5'>
                    <li className='flex mb-3 flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mg-[30px'>
                        <div>
                            <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>{formatDate('08-30-2004')}-{formatDate('12-21-2010')}</span>
                            <p className='text-[16px] leading-6 font-medium text-textColor'> Bachelors</p>
                        </div>
                        <p className='text-[14px] leading-5 font-medium text-textColor'> New Apollo Medical University, New York</p>
                    </li>
                    <li className='flex mb-3 flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mg-[30px'>
                        <div>
                            <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>{formatDate('12-04-2010')}-{formatDate('03-09-2014')}</span>
                            <p className='text-[16px] leading-6 font-medium text-textColor'> PHD in Surgery</p>
                        </div>
                        <p className='text-[14px] leading-5 font-medium text-textColor'> New Apollo Medical University, New York</p>
                    </li>


                </ul>
            </div>


            <div className='mt-12'>
                <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Experience</h3>
                <ul className='pt-4 md:p-5'>
                    <li className='p-4 rounded bg-[#fff9ea] mb-2'>
                        <div>
                            <span className='text-yellowColor text-[15px] leading-6 font-semibold'>{formatDate('01-02-2014')}-{formatDate('08-30-2020')}</span>
                            <p className='text-[16px] leading-6 font-medium text-textColor'> Junior Surgeon</p>
                        </div>
                        <p className='text-[14px] leading-5 font-medium text-textColor'> New Apollo Hospital, New York</p>
                    </li>
                    <li className='p-4 rounded bg-[#fff9ea] mb-2'>
                        <div>
                            <span className='text-yellowColor text-[15px] leading-6 font-semibold'>{formatDate('12-10-2020')}-present</span>
                            <p className='text-[16px] leading-6 font-medium text-textColor'> Senior Surgeon</p>
                        </div>
                        <p className='text-[14px] leading-5 font-medium text-textColor'> New Apollo Hospital, New York</p>
                    </li>


                </ul>
            </div>
        </div>

    );
};

export default DoctorAbout;
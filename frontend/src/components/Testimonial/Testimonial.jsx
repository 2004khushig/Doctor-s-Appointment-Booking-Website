import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import patientAvatar from './../../assets/images/patient-avatar.png';
import { HiStar } from 'react-icons/hi';

const Testimonial = () => {
    return (
        <div>
            <div className='mt-[30px] lg:mt-[55px]'>
                <Swiper 
                    modules={[Pagination]} 
                    spaceBetween={30} 
                    slidesPerView={1} 
                    pagination={{ clickable: true }} 
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className='py-[30px] px-5 rounded-3'>
                            <div className='flex items-center gap-[13px]'>
                                <img src={patientAvatar} alt="Patient Avatar" />
                                <div>
                                    <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Emily Smith</h4>
                                    <div className='flex items-center gap-[2px]'>
                                        <HiStar className='text-yellowColor text-[18px] h-5' />
                                        <HiStar className='text-yellowColor text-[18px] h-5' />
                                        <HiStar className='text-yellowColor text-[18px] h-5' />
                                        <HiStar className='text-yellowColor text-[18px] h-5' />
                                        <HiStar className='text-yellowColor text-[18px] h-5' />
                                    </div>
                                </div>
                            </div>
                            <p className='text-[15px] leading-7 mt-4 text-textColor font-[400]'>
                                The service was exceptional, and the staff was very professional. I felt well taken care of throughout the process.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='py-[30px] px-5 rounded-3'>
                            <div className='flex items-center gap-[13px]'>
                                <img src={patientAvatar} alt="Patient Avatar" />
                                <div>
                                    <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>John Doe</h4>
                                    <div className='flex items-center gap-[2px]'>
                                        <HiStar className='text-yellowColor text-[18px] h-5' />
                                        <HiStar className='text-yellowColor text-[18px] h-5' />
                                        <HiStar className='text-yellowColor text-[18px] h-5' />
                                        <HiStar className='text-yellowColor text-[18px] h-5' />
                                        <HiStar className='text-yellowColor text-[18px] h-5' />
                                    </div>
                                </div>
                            </div>
                            <p className='text-[15px] leading-7 mt-4 text-textColor font-[400]'>
                                I am extremely satisfied with the treatment I received. The team was friendly and attentive to my needs.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='py-[30px] px-5 rounded-3'>
                            <div className='flex items-center gap-[13px]'>
                                <img src={patientAvatar} alt="Patient Avatar" />
                                <div>
                                    <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Sophia Brown</h4>
                                    <div className='flex items-center gap-[2px]'>
                                        <HiStar className='text-yellowColor text-[18px] h-5' />
                                        <HiStar className='text-yellowColor text-[18px] h-5' />
                                        <HiStar className='text-yellowColor text-[18px] h-5' />
                                        <HiStar className='text-yellowColor text-[18px] h-5' />
                                        <HiStar className='text-yellowColor text-[18px] h-5' />
                                    </div>
                                </div>
                            </div>
                            <p className='text-[15px] leading-7 mt-4 text-textColor font-[400]'>
                                Amazing experience! The staff was very knowledgeable and made me feel comfortable at every step.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='py-[30px] px-5 rounded-3'>
                            <div className='flex items-center gap-[13px]'>
                                <img src={patientAvatar} alt="Patient Avatar" />
                                <div>
                                    <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Michael Johnson</h4>
                                    <div className='flex items-center gap-[2px]'>
                                        <HiStar className='text-yellowColor text-[18px] h-5' />
                                        <HiStar className='text-yellowColor text-[18px] h-5' />
                                        <HiStar className='text-yellowColor text-[18px] h-5' />
                                        <HiStar className='text-yellowColor text-[18px] h-5' />
                                        <HiStar className='text-yellowColor text-[18px] h-5' />
                                    </div>
                                </div>
                            </div>
                            <p className='text-[15px] leading-7 mt-4 text-textColor font-[400]'>
                                I highly recommend this service. The results exceeded my expectations, and the staff was fantastic.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='py-[30px] px-5 rounded-3'>
                            <div className='flex items-center gap-[13px]'>
                                <img src={patientAvatar} alt="Patient Avatar" />
                                <div>
                                    <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>Olivia Davis</h4>
                                    <div className='flex items-center gap-[2px]'>
                                        <HiStar className='text-yellowColor text-[18px] h-5' />
                                        <HiStar className='text-yellowColor text-[18px] h-5' />
                                        <HiStar className='text-yellowColor text-[18px] h-5' />
                                        <HiStar className='text-yellowColor text-[18px] h-5' />
                                        <HiStar className='text-yellowColor text-[18px] h-5' />
                                    </div>
                                </div>
                            </div>
                            <p className='text-[15px] leading-7 mt-4 text-textColor font-[400]'>
                                The care and attention I received were top-notch. I am very happy with the overall experience.
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;
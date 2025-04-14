import React, { useState } from 'react';
import Loader from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import useGetProfile from "../../hooks/useFetchData";
import { BASE_URL } from '../../config';
import Tabs from "./Tabs";
import starIcon from '../../assets/images/Star.png'
import DoctorAbout from '../../pages/Doctors/DoctorAbout'
import Profile from "./Profile"
import Appointments from './Appointments';

const Dashboard = () => {
    const { data, loading, error } = useGetProfile(`${BASE_URL}/doctors/profile/me`);
    const [tab, setTab] = useState('overview');

    return (
        <section>
            <div className='max-w-[1170px] px-5 mx-auto'>
                {loading && !error && <Loader />}
                {error && !loading && <Error />}
                {
                    !loading && !error && (
                        <div className='grid lg:grid-cols-3 gap-[30px] lg:gap-[30px]'>
                            <Tabs tab={tab} setTab={setTab} />
                            <div className='lg:col-span-2'>
                                {data.isApproved === "pending" && (
                                    <div className='flex p-4 mb-6 text-yellow-800 bg-yellow-50 rounded-lg border border-yellow-300'>
                                        <svg className="w-5 h-5 mr-2 mt-0.5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M8.257 3.099c.763-1.36 2.683-1.36 3.446 0l6.516 11.636c.75 1.341-.213 3.015-1.723 3.015H3.464c-1.51 0-2.473-1.674-1.723-3.015L8.257 3.1zM11 13a1 1 0 10-2 0 1 1 0 002 0zm-1-2a1 1 0 01-1-1V7a1 1 0 112 0v3a1 1 0 01-1 1z" />
                                        </svg>
                                        Your account is currently under review. Please wait for admin approval.
                                    </div>
                                )}
                                
                                <div>
                                    
                                    {tab === 'overview' && (
                                        <div>
                                            <div className='flex items-center gap-4 mb-10'>
                                                <figure className='max-w-[200px] max-h-[200px]'>
                                                    <img src={data?.photo} alt="" className='w-full' />
                                                </figure>
                                                <div>
                                                    <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-4 lg:py-2 lg:lx-6 rounded text-[12px] leading-4 lg:text-[16px] lg:leading-6 font-semibold'>
                                                        {data.specialization}
                                                    </span>
                                                    <h3 className='text-[22px] leading-9 font-bold text-headingColor mt-3'>{data.name}</h3>
                                                    <div className='flex items-center gap-[6px]'>
                                                        <span className='flex items-center gap-[6px]text-headingColor text-[14px] leading-5 lg:text-[16px] lg:leading-6 font-semibold'>
                                                            <img src={starIcon} alt="" />{data.averageRating}
                                                        </span>
                                                        <span className='text-textColor text-[14px]leading-5 lg:text-[16px] lg:leading-6 font-semibold'>({data.totalRating})</span>
                                                    </div>
                                                    <p className='text__para font-[15px] lg:max-w-[390px] leading-6'>{data.bio}</p>
                                                </div>
                                            </div>
                                            <DoctorAbout name={data.name} about={data.about} qualifications={data.qualifications} experiences={data.experiences}/>
                                        </div>)}

                                    {tab === 'appointments' && <Appointments appointments={data.appointments}/>}
                                    {tab === 'settings' && <Profile doctorData={data}/>}
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default Dashboard;

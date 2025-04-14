import React, { useState } from "react";
import { useParams } from "react-router-dom";
import starIcon from "../../assets/images/Star.png";
import DoctorAbout from "./DoctorAbout";
import Feedback from "./Feedback";
import SidePanel from "./SidePanel";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData.jsx";
import Loader from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";

const DoctorDetails = () => {
  const { id } = useParams(); // get doctor ID from URL
  const [tab, setTab] = useState("about");

  const {
    data: doctor,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/doctors/${id}`);

  return (
    <div>
      <section>
        <div className="max-w-[1300px] px-5 mx-auto">
          {loading && <Loader />}
          {error && <Error />}
          {!loading && !error && doctor && (
            <div className="grid md:grid-cols-3 gap-[40px]">
              <div className="md:col-span-2">
                <div className="flex items-start gap-6">
                  <figure className="w-[180px] h-[180px] flex-shrink-0">
                    <img
                      src={doctor.photo}
                      alt={doctor.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </figure>
                  <div className="flex flex-col gap-3 w-full">
                    <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-4 text-[14px] font-semibold rounded-md self-start">
                      {doctor.specialization}
                    </span>
                    <h3 className="text-headingColor text-[24px] font-bold">
                      {doctor.name}
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className="flex items-center text-[16px] font-semibold text-headingColor">
                        <img src={starIcon} alt="" className="w-5 h-5" />{" "}
                        {doctor.avgRating || "N/A"}
                      </span>
                      <span className="text-[14px] text-gray-500">
                        ({doctor.totalRating || 0} Reviews)
                      </span>
                    </div>
                    <p className="text-[16px] leading-6 text-gray-600 max-w-[850px]">
                      {doctor.bio}
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
                  {tab === "about" && <DoctorAbout doctor={doctor} />}
                  {tab === "feedback" && <Feedback doctorId={doctor._id} />}
                </div>
              </div>

              <div>
                <SidePanel doctor={doctor} ticketPrice={doctor.ticketPrice} timeSlots={doctor.timeSlots}/>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default DoctorDetails;

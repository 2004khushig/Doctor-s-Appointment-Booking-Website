import React, { useEffect, useState } from "react";
import DoctorCard from "../../components/Doctors/DoctorCard";
import Testimonial from "../../components/Testimonial/Testimonial";
import Loader from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/useFetchData.jsx";

const Doctors = () => {
  const [query, setQuery] = useState('');
  const [debounceQuery, setDebounceQuery] = useState('');

  // Debounce logic
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceQuery(query.trim());
    }, 500); // Adjust delay as needed
    return () => clearTimeout(timeout);
  }, [query]);

  const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctors?query=${debounceQuery}`);

  return (
    <div>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Find A Doctor</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#9daec82c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              placeholder="Search Doctor"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="btn mt-0 rounded-[0px] rounded-r-md"
              onClick={() => setDebounceQuery(query.trim())}
            >
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          {loading && <Loader />}
          {error && <Error />}
          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] ld:mt-[55px]">
              {doctors.length > 0 ? (
                doctors.map((doctor) => (
                  <DoctorCard key={doctor._id} doctor={doctor} />
                ))
              ) : (
                <p>No doctors found matching "{debounceQuery}"</p>
              )}
            </div>
          )}
        </div>

        <section>
          <div className="container">
            <div className="xl:w-[480px] mx-auto">
              <h2 className="heading text-center">What Our Patients Say</h2>
              <p className="text__para text-center mt-4">
                Here are some personalized views and feedback from our patients.
                We are always happy to hear from you. Their feedback is very
                important for us to improve our services and provide you with
                the best experience.
              </p>
            </div>
            <Testimonial />
          </div>
        </section>
      </section>
    </div>
  );
};

export default Doctors;

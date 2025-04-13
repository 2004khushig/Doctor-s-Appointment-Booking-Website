import {useContext} from 'react';
import { BiMenu } from "react-icons/bi";
import { AuthContext } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';

const Tabs = ({ tab, setTab }) => {
    const {dispatch}=useContext(AuthContext)
    const navigate=useNavigate();

    const handleLogout=()=>{
        dispatch({type:'LOGOUT'})
        navigate('/')
    }
    return (
        <div>
            <span className='lg:hidden'>
                <BiMenu className='w-6 h-6 cursor-pointer' />
            </span>
            <div className="hidden lg:flex flex-col p-6 bg-white shadow-md items-center h-max rounded-2xl space-y-6 w-full max-w-[250px]">
                <button
                    onClick={() => setTab('overview')}
                    className={`w-full py-3 px-4 rounded-lg text-sm font-medium transition-colors duration-200 
                    ${tab === "overview"
                        ? "bg-indigo-100 text-primaryColor"
                        : "bg-gray-100 text-gray-700 hover:bg-indigo-50 hover:text-primaryColor"}`}
                >
                    Overview
                </button>
                <button
                    onClick={() => setTab('appointments')}
                    className={`w-full py-3 px-4 rounded-lg text-sm font-medium transition-colors duration-200 
                    ${tab === "appointments"
                        ? "bg-indigo-100 text-primaryColor"
                        : "bg-gray-100 text-gray-700 hover:bg-indigo-50 hover:text-primaryColor"}`}
                >
                    Appointments
                </button>
                <button
                    onClick={() => setTab('settings')}
                    className={`w-full py-3 px-4 rounded-lg text-sm font-medium transition-colors duration-200 
                    ${tab === "settings"
                        ? "bg-indigo-100 text-primaryColor"
                        : "bg-gray-100 text-gray-700 hover:bg-indigo-50 hover:text-primaryColor"}`}
                >
                    Profile
                </button>

                <div className="mt-10 w-full">
                    <button 
                    onClick={handleLogout}
                        className="w-full py-3 px-4 rounded-lg text-sm font-medium bg-[#101A1E] text-white hover:bg-[#0a1519] transition-colors duration-200"
                    >
                        Logout
                    </button>
                    <button 
                        className="w-full mt-4 py-3 px-4 rounded-lg text-sm font-medium bg-red-500 hover:bg-red-600 text-white transition-colors duration-200"
                    >
                        Delete Account
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Tabs;

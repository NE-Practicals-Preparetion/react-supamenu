import Sidebar from "./Sidebar";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div>
            <div className='navbar flex px-10 w-screen h-20 justify-between border-b border-sidebar-gray'>
                <div className="first items-center mt-5 pl-40">
                    <Link to={"/"} className='text-black font-bold text-4xl'>Supa</Link>
                    <Link to={"/"} className='text-main-background font-bold text-4xl'>Menu</Link>
                </div>
                <div className="flex text-sidebar-gray text-xl gap-3 items-center justify-between">
                    <AiOutlineSearch></AiOutlineSearch>
                    <IoMdNotifications className="text-main-background"></IoMdNotifications>
                    <div className="profile border-l border-gray-300 flex items-center">
                        <h2 className="text-black mx-5">Jacques Kagabo</h2>
                        <div className="profile-picture border-sidebar-gray">
                            <img src="/header.png" className="w-48" h-48 alt="Logo" />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="flex w-full mt-20 ml-40">
                <Sidebar />
                <div className="register-form border ml-20 border-sidebar-gray w-1/2">
                    Register
                </div>
            </div> */}

        </div>
    )
}

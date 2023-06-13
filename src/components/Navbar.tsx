import {AiOutlineSearch} from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className='navbar flex px-10 w-screen h-40 justify-between'>
            <div className="first items-center mt-10 pl-40">
                <Link to={"/"} className='text-white font-bold text-6xl'>Supa</Link>
                <Link to={"/"} className='text-main-background font-bold text-6xl'>Menu</Link>
            </div>
            <div className="flex text-sidebar-gray text-xl gap-3 items-center justify-between">
                <AiOutlineSearch></AiOutlineSearch>
                <IoMdNotifications></IoMdNotifications>
                <div className="profile border-l border-gray-300 flex items-center">
                    <h2 className="text-white mx-5">Jacques Kagabo</h2>
                    <div className="profile-picture border-sidebar-gray">
                        <img src="/header.png" className="w-48" h-48 alt="Logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

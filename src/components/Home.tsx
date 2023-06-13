import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./navbar.css";

export default function Home() {
  return (
    <div>
      <div className="first h-1/2 pb-10 bg-black">
        <Navbar />
        <div className="center text-white text-center flex flex-col items-center mt-20">
          <h2 className="text-6xl text-white">Register your restaurant on SupaMenu</h2>
          <h3 className="text-2xl mb-5">for free and get more revenue</h3>
          <div className="btns flex p-5 justify-between w-1/2">
            <Link to={"/restaurant/register"} className="btn flex-1  bg-main-background text-white font-bold text-xl py-4 mx-10 rounded-md">Register your Restaurant</Link>
            <Link to={"/signin"} className="btn flex-1  border border-white text-white font-bold text-lg py-4 rounded-md">Restaurant already registered? Signin</Link>
          </div>
        </div>
      </div>
      <div className="second bg-cover w-full flex flex-col h-1/2" style={{ backgroundImage: `url('/bg-image.png')` }}>
        <h2 className="text-center m-10 text-gray2 text-4xl">How It Works</h2>
        <div className="cards flex flex-wrap justify-around mt-5 mb-10">
          <div className="card w-30 border border-gray-300 bg-white flex flex-col p-10 items-center rounded-lg">
            <img src="/Registration.png" alt="register" />
            <h2 className="text-center m-5 text-gray2 text-4xl">Step 1</h2>
            <p className="text-center text-sidebar-gray text-lg mb-2">Register your restaurant</p>
          </div>
          <div className="card bg-white border border-gray-300 flex flex-col p-10 flex.wrap items-center rounded-lg">
            <img src="/Food.png" alt="food" />
            <h2 className="text-center m-5 text-gray2 text-4xl">Step 2</h2>
            <p className="text-center text-sidebar-gray text-lg mb-2">Create your restaurant profile and </p>
            <p className="text-center text-sidebar-gray text-lg mb-2">create menu items</p>
          </div>
          <div className="card bg-white border border-gray-300 flex flex-col p-10 items-center rounded-lg">
            <img src="/OrderHistory.png" alt="orderHistory" />
            <h2 className="text-center m-5 text-gray2 text-4xl">Step 3</h2>
            <p className="text-center text-sidebar-gray text-lg mb-2">Start receiving orders</p>
          </div>
        </div>
      </div>
    </div>
  )
}

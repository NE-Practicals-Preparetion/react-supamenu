import { Link } from "react-router-dom";
import "./signin.css";

export default function Signup() {
    return (
        <div className='signin bg-main-background h-screen flex items-center'>
            <div className="logo flex-auto w-48 text-center">
                <span className='text-white font-bold text-8xl'>Supa</span>
                <span className='text-black font-bold text-8xl'>Menu</span>
            </div>
            <div className="signin_form flex-auto w-48">
                <div className='w-3/4 bg-white rounded-lg p-5'>
                    <h2 className='text-center text-gray2 text-4xl mb-2 heading1'>Sign Up</h2>
                    <form className="form">
                        <div className="form-group my-3 flex flex-col">
                            <label htmlFor="fname" className='text-sidebar-gray text-lg'>FIRST NAME</label>
                            <input type="text" className="form-control" id='fname' placeholder='First name' />
                        </div>
                        <div className="form-group my-3 flex flex-col">
                            <label htmlFor="lname" className='text-sidebar-gray text-lg'>LAST NAME</label>
                            <input type="text" id="lname" className="form-control" placeholder="Last name" />
                        </div>
                        <div className="form-group my-3 flex flex-col">
                            <label htmlFor="phone" className='text-sidebar-gray text-lg'>PHONE</label>
                            <input type="text" className="form-control" id='phone' placeholder='Tel No' />
                        </div>
                        <div className="form-group my-3 flex flex-col">
                            <label htmlFor="email" className='text-sidebar-gray text-lg'>EMAIL</label>
                            <input type="email" className="form-control" id='email' placeholder='Email address' />
                        </div>
                        <div className="form-group my-3 flex flex-col">
                            <label htmlFor="password" className='text-sidebar-gray text-lg'>PASSWORD</label>
                            <input type="password" id="password" className="form-control" placeholder="Password" />
                        </div>
                        <div className="form-group my-4">
                            <button className="btn w-full bg-main-background text-white font-bold text-xl py-4 mt-2 px-4 rounded-md">
                                Log In
                            </button>
                        </div>
                        <div className="forgot-password">
                            <h2 className="text-center text-sidebar-gray text-xl mb-3">Don't have account?
                                <Link to={"/signin"} className="text-blue-500 mx-2">Sign in</Link></h2>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

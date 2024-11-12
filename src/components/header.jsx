import NavLink from "./navLink";
// import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Header(){

    const navigate = useNavigate();

    const createPath = () => {
        navigate('/');
    }

    return(
        <div className="bg-blue-700 ">
            <div onClick={createPath} className="inline-block me-32 ps-10 font-extrabold text-3xl text-white cursor-pointer">
                VPC
            </div>
            <div className="inline-block ms-32 me-32 px-20">
                <NavLink link="Home"/>
                <NavLink link="About"/>
                <NavLink link="Latest"/>
                <NavLink link="Contact Us"/>
                <NavLink link="More"/>
            </div>
            <div className="inline-block ms-32">
                <input placeholder="Search Here" className="rounded-md p-2 px-6 " type="text"/>
            </div>
        </div>
    );
}
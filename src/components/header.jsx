import NavLink from "./navLink";
export default function Header(){
    return(
        <div className="bg-blue-700 ">
            <div className="inline-block me-32 ps-10 font-extrabold text-3xl text-white">
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
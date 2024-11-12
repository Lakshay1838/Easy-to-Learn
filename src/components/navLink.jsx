import '../index.css'
import { useNavigate } from 'react-router-dom';
import ContactUs from './ContactUs/contact';
export default function NavLink({ link = "No link" }) {
    const navigate = useNavigate();

    const createPathHome = () => {
        navigate('/');
    }

    const scrollToContactUs = () => {
        const ele = document.getElementById("contactSection");
        ele.scrollIntoView({behavior : "smooth"});
    }
    createPathHome()
    if(link == "Home"){
        return (
            <h3 onClick={createPathHome} className = "inline-block mx-1 px-4 py-4 text-xl text-white hover:text-red-500 cursor-pointer">{link}</h3>
        );
    }
    // else 
    if(link == "Contact Us"){
        return (
            <h3 onClick={scrollToContactUs} className = "inline-block mx-1 px-4 py-4 text-xl text-white hover:text-red-500 cursor-pointer">{link}</h3>
        );
    }
    return (
        <h3 className = "inline-block mx-1 px-4 py-4 text-xl text-white hover:text-red-500 cursor-pointer">{link}</h3>
    );
}

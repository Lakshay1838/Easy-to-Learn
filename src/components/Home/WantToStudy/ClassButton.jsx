import { Link } from "react-router-dom";


export default function ClassButton({Standard = "_"}){

    return(
        <div
         className=" inline-block px-7 py-3 mx-2 text-white bg-blue-500 rounded-xl hover:px-9 hover:py-5 hover:text-3xl transition-all">
            <Link to={"/class8"} className="text-2xl">{Standard}Th Class</Link>
        </div>
    );
}
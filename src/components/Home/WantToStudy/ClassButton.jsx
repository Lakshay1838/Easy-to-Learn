export default function ClassButton({Standard = "_"}){
    return(
        <div className=" inline-block px-7 py-3 mx-2 text-white bg-blue-500 rounded-xl hover:px-9 hover:py-5 hover:text-3xl transition-all">
            <span className="text-2xl">{Standard}Th Class</span>
        </div>
    );
}
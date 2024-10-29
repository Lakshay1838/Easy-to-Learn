import ClassButton from "./ClassButton";
export default function WantToStudy(){
    return (
        <div className=" bg-slate-400 px-20 py-14 flex space-x-96">
            <div className="inline-block me-20">
                <span className="text-4xl">Want to Study ? </span>
            </div>
            <div className = "classButtons   inline-block  ps-20">
                <ClassButton Standard = "8"/>
                <ClassButton Standard = "9"/>
                <ClassButton Standard = "10"/>
            </div>
        </div>
    );
}
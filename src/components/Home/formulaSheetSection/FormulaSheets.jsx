import SheetButton from "./SheetButton";
export default function FormulaSheets(){
    return(
        <div className="border-black border-2 ">

            <div className=" text-5xl text-center">
                <span className="underline font-semibold">Formula Sheets</span>
            </div>
            <div className=" p-5">
                <SheetButton name="Math's"/>
                <SheetButton name="Math's"/>
                <SheetButton name="Math's"/>
                <SheetButton name="Math's"/>
                <SheetButton name="Math's"/>
                <SheetButton name="Math's"/>
                <SheetButton name="Math's"/>
                <SheetButton name="Math's"/>
            </div>
        </div>
    );
}
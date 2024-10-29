export default function SheetButton({name = "_"}){
    return (
        <div className=" inline-block px-10 py-3 mx-7 my-3 text-white bg-green-500 rounded-2xl">
            <span className="text-2xl">{name} Formula Sheet</span>
        </div>
    );
}
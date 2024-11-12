import Header from "../header";
import ImagesSection from "./ImageSection/imagesSection";
import WantToStudy from "./WantToStudy/WantToStudy";
import FormulaSheets from "./formulaSheetSection/FormulaSheets";

export default function Home(){
    return (
        <>
            <Header/>
            <ImagesSection/>
            <WantToStudy/>
            <FormulaSheets/>
        </>
    );
}
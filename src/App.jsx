import Header from "./components/header";
// import './index.css'
import ImagesSection from "./components/Home/ImageSection/imagesSection";
import WantToStudy from "./components/Home/WantToStudy/WantToStudy";
import FormulaSheets from "./components/Home/formulaSheetSection/FormulaSheets";


export default function App(){
    return(
        <>
        <Header/>
        <ImagesSection/>
        <WantToStudy/>
        <FormulaSheets/>

        </>
    );  
}
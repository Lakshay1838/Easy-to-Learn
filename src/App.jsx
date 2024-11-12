import Header from "./components/header";
// import './index.css'
import ImagesSection from "./components/Home/ImageSection/imagesSection";
import WantToStudy from "./components/Home/WantToStudy/WantToStudy";
import FormulaSheets from "./components/Home/formulaSheetSection/FormulaSheets";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// impirting class components
import Class8 from "./components/Home/ClassPages/Class8";
import Class9 from "./components/Home/ClassPages/Class9";
import Class10 from "./components/Home/ClassPages/Class10";

import ContactUs from "./components/ContactUs/contact";
import More from "./components/More/More";




export default function App() {
    return (

        <Router>
            <Header />
            <Routes>
                <Route path='/' element={
                    <>
                        <ImagesSection />
                        <WantToStudy />
                        <FormulaSheets />
                        <ContactUs/>    
                    </>
                }
                />

                <Route path='/class8' element={<Class8 />} />
                <Route path='/class9' element={<Class9 />} />
                <Route path='/class10' element={<Class10 />} />
            </Routes>
            {/* <More/> */}
        </Router>
    );
}
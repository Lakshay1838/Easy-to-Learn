import logo from './logo.svg';
import {HashRouter} form "react-router-dom";
import './App.css';
import Header2 from './header2';
import Home from './HomeSection/homeSection';
import Classes from './Classes/Classes';
import CheatSheets from './cheatSheet/cheatSheet.js';
function App() {
  
  return(
    <>
    <Header2/>
    <Home/>
    <Classes/>
    <CheatSheets/>
    </>
);
}
export default App;

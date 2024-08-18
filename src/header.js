import "../src/header.css";


function Navigationlinks(){
    return(
        <a className="aLink">home</a>
    );
}
function Logo(){
    return(
        <img className="headerImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa5L8x-03XWqCOSAcXaC_dfPbIxWzqbulUg7Q8nzSa32v3emM8QqbwT-sYvdi6yaLgEg&usqp=CAU"/>
    );
}
function Navigation(){
    return (
        <div className="navigation">
            <Navigationlinks/>
            <Navigationlinks/>
            <Navigationlinks/>
            <Navigationlinks/>
        </div>
    );
}
function Search(){
    return (
        <input className="search-input" placeholder="Search"></input>
    );
}
export default function Header(){
    return (
        <div className="header header-height">
            <div className="inline logo">
                <Logo/>
            </div>
            <div className="inline header-height">
                <Navigation/>
            </div>
            <div className="inline search header-height">
                <Search/>
            </div>
        </div>
    );
}

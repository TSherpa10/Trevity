import React, { useState } from "react";
import './Navbar.css';
import {FiMenu, FiX} from "react-icons/fi";

/*
const navbarLinks = [
    {url: "/home", title: "Home"}
];*/
const NavBar = ({navbarLinks}) =>{
    const [menuClicked, setMenuClicked] = useState(false);

    const toggleMenuClick = () => {
        setMenuClicked(!menuClicked);
    };

    return(
        <nav className="navbar">
            {menuClicked ? (<FiX size={25} className="navbar_menu" onClick = {toggleMenuClick}/>)
            : (<FiMenu size={25} className="navbar_menu" onClick = {toggleMenuClick}/>)}
            <ul className= {menuClicked ? "navbar_list navbar_list--active" : "navbar_list"}>
                {navbarLinks.map((item) => {
                    return (
                        <li className="navbar_item" key={item.title}>
                            <a className="navbar_link" href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    );
                })}
            </ul>
            <span className="navbar_logo">Trevity</span>
        </nav>
    );
};

export default NavBar
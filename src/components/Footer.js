import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="Footer">
            <div>&copy;2019 - Coded by MarieVal</div>
            <a href="https://github.com/marieval"
                target="_blank"
                rel="noopener noreferrer">
                <img src={require("../assets/logo-github.png")} alt="github logo"></img>
            </a>
            {/* <span>(as her first React-App)</span> */}
        </div >
    )
}

export default Footer;


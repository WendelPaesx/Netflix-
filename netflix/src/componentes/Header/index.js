import React from "react";
import './Header.css'



export default ({ black }) => {
    return (

        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="Netflix"></img>
                </a>

            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://github.com/wendelpaesx.png" alt="Usuario"></img>
                </a>

            </div>
           
        </header>
   


 
 )
}
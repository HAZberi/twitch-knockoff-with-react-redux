import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link className="active item" to="/">StreamA</Link>
            <div className="right menu">
                <Link className="item" to="/">All Channels</Link>
                <GoogleAuth />
            </div>
        </div>
    )
}

export default Header;



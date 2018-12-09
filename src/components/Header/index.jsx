import { connect } from 'react-redux';
import React from "react";
import Party from "./Party";
import Navbar from "./navbar";
import './header.css';
const Header = () => {
    return (
        <span>
            <Navbar/>
            <div className='party'>
                <Party/>
            </div>
        </span>
    );
};

export default connect()(Header);

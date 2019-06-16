import { connect } from 'react-redux';
import React from "react";
import Pokemon from './Pokemon';
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";

const Body = () => {
    return (
        <div className='columns'>
            <LeftSideBar />
            <Pokemon/>
            <RightSideBar />
        </div>
    );
};

export default connect()(Body);

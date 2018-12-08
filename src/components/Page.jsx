import { connect } from 'react-redux';
import React from "react";
import Body from './Body/';
import Header from "./Header/";

const Page = () => {
    return (
        <div>
            <Header/>
            <Body/>
        </div>
    );
};

export default connect()(Page);

import { connect } from 'react-redux';
import React from "react";
import Body from './Body';
import Header from "./Header";
import Footer from './Body/Footer';

const Page = () => {
    return (
        <div style={ { 'position': 'relative', 'minHeight': '100vh' } }>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    );
};

export default connect()(Page);

import { connect } from 'react-redux';
import React from "react";
import LeftHeader from "./LeftHeader";
import RightHeader from "./RightHeader";
import Party from "./Party";

const Header = () => {
    return (
        <div style={{'display': 'flex'}}>
            <LeftHeader />
            <Party/>
            <RightHeader />
        </div>
    );
};

export default connect()(Header);

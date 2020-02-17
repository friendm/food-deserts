import React from "react";
import NavPages from "./NavPages";
import PropTypes from "prop-types";
import {Menu} from "semantic-ui-react";

const NavPagesMenu = (props) => {
    return <Menu>
        <NavPages mobile={props.mobile}>
            {props.children}
        </NavPages>
    </Menu>;
};

NavPages.propTypes = {
    mobile: PropTypes.bool
};

export default NavPagesMenu;

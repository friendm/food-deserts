import React from "react";
import PropTypes from "prop-types";
import {Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";

function Page(name, link) {
    this.name = name;
    this.link = link;
}

export const routes = [
    new Page("Home", "/"),
    new Page("Map", "/map"),
    new Page("Email", "/email"),
    new Page("Info", "/info"),
    new Page("FAQ", "/faq")
];

// This component assumes it's a child of a Menu
const NavPages = (props) => {
    const logo = <Menu.Item>
        <img src="https://react.semantic-ui.com/logo.png" alt="Semantic UI logo"/>
    </Menu.Item>;

    return <>
        {logo}
        {props.children}
        {!props.mobile && routes.map(route => <Menu.Item key={route.link} as={Link}
                                                         onClick={props.inSidebar ? props.onClick : () => null}
                                                         to={route.link}>{route.name}</Menu.Item>)}
    </>;
};

NavPages.propTypes = {
    mobile: PropTypes.bool
};

export default NavPages;

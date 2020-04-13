import React from "react";
import "./index.scss";
import cx from "classnames";

export const Header = (props) => {

    return(
        <header id="menus-commonHeader" className={cx(props.className, "header")}>
            <div className="header-content">header</div>
        </header>
    )
};

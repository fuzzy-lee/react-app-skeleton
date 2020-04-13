import React from "react";
import "./index.scss";
import cx from "classnames";
import {Header} from "../Header";
import {Aside} from "../Aside";

export const Layout = (props) => {

    return(
        <>
            <Header/>
            <main className="layout">
                <Aside />
                <div className="layout-main">{props.children}</div>
            </main>
        </>
    )
};

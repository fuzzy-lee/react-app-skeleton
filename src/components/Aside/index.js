import React from "react";
import cx from "classnames";
import {asideRouter} from "../../config/asideRouter";
import {NavLink} from "react-router-dom";

import "./index.scss";

export const Aside = (props) => {

    return(
        <aside className={cx("aside", props.className)}>
            <nav className="aside-content">
                {asideRouter.map(item => <NavLink key={item.path}
                                                  activeClassName="active"
                                                  className="aside-item"
                                                  to={`/${item.path}`}>{item.name}</NavLink>)}
            </nav>
        </aside>
    )
};

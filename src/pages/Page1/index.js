import React from "react";
import {Button} from "antd";
import {getAppActon} from "./action";
import {useRootDispatch, useRootStore} from "../../store";
import {useFormatMessage} from "../../util/hooks/useFormatMessage";

const Page1 = (props) => {

    const rootDispatch = useRootDispatch();
    const rootState = useRootStore();
    const intl = useFormatMessage();


    return(
        <div>
            <p>page1</p>
            <p>name: {intl("name")}</p>
            <p>{JSON.stringify(rootState.appData)}</p>
            <Button type="primary" onClick={() => rootDispatch(getAppActon)}>getApp</Button>
        </div>
    )
};

export default Page1;

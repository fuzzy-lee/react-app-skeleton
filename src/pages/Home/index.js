import React, {useEffect} from "react";
import {Button, TimePicker} from "antd";
import moment from 'moment';
import {useRootStore, useRootDispatch} from "../../store";
import {initState, reducer} from "./reducers";
import {useEnhanceReducer} from "../../util/hooks/useEnhanceReducer";
import {opAsync} from "./asyncOp";


const Home = (props) => {

    let rootState = useRootStore();
    let rootDispatch = useRootDispatch();


    let [state, dispatch] = useEnhanceReducer(reducer, initState);
    state = state.toJS();

    function onChange(time, timeString) {
        console.log(time, timeString);
    }

    function asyncUpdate() {
        setTimeout(() => {
            dispatch({type: "CHANGE_NAME", payload: "张三" + rootState.state2.num});
        }, 0)
    }

    useEffect(() => {
        asyncUpdate();
    }, [rootState.state2.num]);

    return(
        <div>
            home
            <Button type="primary">button</Button>
            <TimePicker onChange={onChange} defaultValue={moment('00:00:00', 'HH:mm:ss')} />
            <div>
                <p>name: {state.name}</p>
                <p>num: {state.state1.num}</p>
                <Button onClick={() => dispatch({type: "CHANGE_NAME", payload: "张三"})} type="primary">addName</Button>
                <Button onClick={() => dispatch({type: "INC"})} type="danger">addNum</Button>
                <Button onClick={() => rootDispatch({type: "PAGE2_INC"})}>async update</Button>
                <Button onClick={() => dispatch(opAsync)}>opAsync</Button>
            </div>
        </div>
    )
};

export default Home;

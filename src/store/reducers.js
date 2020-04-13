import {setIn, fromJS, set} from "immutable";

const initState ={
    state1: {
        num: 1,
    },
    state2: {
        num: 2
    },
    isGettingApp: false,
    appData: [],
};

function reducer(state, action) {
    switch (action.type) {
        case "PAGE1_INC":
            return setIn(state, ["state1", "num"], state.state1.num + 1);
        case "PAGE2_INC":
            return setIn(state, ["state2", "num"], state.state2.num + 1);
        case "CHANGE_IS_GETTING_APP":
            return set(state, "isGettingApp", action.payload);
        case "CHANGE_APP_DATA":
            return setIn(state, ["appData"], action.payload);
        default:
    }
}

export {
    initState,
    reducer
}

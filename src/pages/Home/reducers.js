import {setIn, fromJS} from "immutable";
import {useStore} from "../../store";

const initState = fromJS({
    name: "",
    state1: {
        num: 0,
    },
});

function reducer(state, action) {
    switch (action.type) {
        case "INC":
            return state.setIn(["state1", "num"], state.get("state1").get("num") + 1);
        case "CHANGE_NAME":
            return state.setIn(["name"], action.payload);
        default:
    }
}

export {
    initState,
    reducer
}

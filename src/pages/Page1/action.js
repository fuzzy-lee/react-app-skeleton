import {getApp} from "../../api/page1";

let getAppActon = async (dispatch, state) => {
    dispatch({type: "CHANGE_IS_GETTING_APP", payload: true});
    try {
        let data = await getApp();
        dispatch({type: "CHANGE_APP_DATA", payload: data});
    }catch (e) {
        console.log(e);
    }finally {
        dispatch({type: "CHANGE_IS_GETTING_APP", payload: false});
    }
};

export {
    getAppActon
}

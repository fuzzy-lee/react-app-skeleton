export const opAsync = (dispatch) => {
    setTimeout(() => dispatch({type: "CHANGE_NAME", payload: "async张三"}), 1500);
};

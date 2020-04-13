import {ajax} from "../config/axiosContainer";

const getApp = (method = "GET") =>
    ajax({
        url: "/dataquality/getUser",
        method: method
    });


export {
    getApp
}

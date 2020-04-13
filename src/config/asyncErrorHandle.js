import {notification} from "antd";

notification.config({
    placement: 'topRight',
    top: 60,
    duration: 5,
});

let responseErrorHandle = function (response) {
    if (response.status === 200) {
        let data = response.data;
        if(data.code === undefined) return;
        switch (data.code) {
            case 200:
                break;
            case 403:
                // window.jumpToLoginPage
                //     ? window.jumpToLoginPage()
                //     : (window.location.href = window.location.origin + window.location.pathname)
            case 10000:
                break;
            default:
                let message = "Abnormal",
                    description = data.msg || "Unknown exception";
                const key = `open${Date.now()}`;
                notification.warning({
                    message,
                    description,
                    key,
                });
            }
    }
    if(response.status === 401){
        window.location.href = window.location.origin + window.location.pathname
    }
};
let asyncErrorHandle = function (error) {
    const key = `open${Date.now()}`;
    let message = "",
        description = "";
    error.message = error.message.includes("timeout of") ? "time out" : error.message;
    if(error.request && error.request.status === 401){
        window.location.href = window.location.origin + window.location.pathname
        return
    }
    switch (error.message) {
        case "Network Error":
            message = `Network anomaly`;
            description = "The network is abnormal, please check your network connection or contact the administrator.";
            break;
        case "time out":
            message = `Request timed out`;
            description = "The data request timed out, please check your network connection or contact the administrator.";
            break;
        default:
            message = `${error.message}`;
            description = error.stack;
    }
    notification.warning({
        message,
        description,
        key,
    });
};

export {
    responseErrorHandle,        //请求返回结果异常提示信息
    asyncErrorHandle,           //异步请求异常提示信息
}

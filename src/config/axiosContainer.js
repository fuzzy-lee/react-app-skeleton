import axios from "axios";
import {responseErrorHandle, asyncErrorHandle} from "./asyncErrorHandle";
import qs from 'qs'
const devURL = "http://demo216.test.com:8070/";


const isDev = process.env.NODE_ENV === 'development';
const ajax = axios.create({
    baseURL: isDev ? devURL : "/dataquality/",

    method: "GET",
    timeout: 180 * 1000,
    //设置允许跨域传递cookies
    withCredentials: isDev,
    // `transformRequest` allows changes to the request data before it is sent to the server
    // This is only applicable for request methods 'PUT', 'POST', and 'PATCH'
    // The last function in the array must return a string or an instance of Buffer, ArrayBuffer,
    // FormData or Stream
    // You may modify the headers object.
    transformRequest: [function (data, headers) {
        // Do whatever you want to transform the data
        return data;
    }],
    // paramsSerializer: function(params) {
    //     return qs.stringify(params, {arrayFormat: 'brackets'})
    // },
    // `transformResponse` allows changes to the response data to be made before
    // it is passed to then/catch
    transformResponse: [function (data) {
        // Do whatever you want to transform the data
        return data;
    }],
    headers: isDev ? {} : {'X-Requested-With': 'XMLHttpRequest'},
});

// ajax.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// ajax.defaults.headers.get['content-type'] = 'application/x-www-form-urlencoded';


// Add a request interceptor
const reqInter = ajax.interceptors.request.use(function (config) {
    //Do something before request is sent
    if(config.method === 'post' && config.headers.post["Content-Type"] !== "application/json;charset=UTF-8"){
        config.data = qs.stringify(config.data)
    }
    return config;
}, function (error) {
    //Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
const resInter = ajax.interceptors.response.use(function (response) {
    if(typeof response.data === 'string'){
        try{
            response.data = JSON.parse(response.data)
        }catch(e){

        }
    }
    responseErrorHandle(response);
    return response;
}, function (error) {
    asyncErrorHandle(error);
    return Promise.reject(error);
});


export {
    ajax,
}

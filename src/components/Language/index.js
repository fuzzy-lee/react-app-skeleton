import React from "react";
import Cookies from "js-cookie";

import {IntlProvider} from "react-intl";
import zh_CN from "../../resource/local/zh-CN";
import en_US from "../../resource/local/en-US";

import {ConfigProvider} from "antd";
import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

const getLanguage = () =>
    Cookies.get("lang") || (navigator.language || navigator.browserLanguage).toLowerCase().split("-")[0];

let antdLang = zhCN;
let lang = getLanguage();
let isEnglish = lang === "en";
if (isEnglish) {
    antdLang = enUS;
}

moment.locale(lang);

export const Language = (props) => {
    return (
        <IntlProvider locale={lang} messages={isEnglish ? en_US : zh_CN}>
            <ConfigProvider locale={antdLang}>
                {props.children}
            </ConfigProvider>
        </IntlProvider>
    )
};


export {
    getLanguage
}

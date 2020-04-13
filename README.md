### react-app-skeleton
一个基于create-react-app的react脚手架。已配置路由、axios、antd、scss、immutable、全局状态管理、按需加载、代码分割。

### 启动
`npm start`

### 构建
`npm run build`

### 一些说明
1. 项目未使用第三方状态库，全局状态管理由`context`实现
2. `useEnhanceReducer`与`useReducer`用法相同，仅增加支持异步action
3. 项目已引入`immutable`库，建议使用
4. 国际化使用`react-intl`库，建议优先使用自定义hook`useFormatMessage`作为翻译api

#### IE兼容
项目兼容ie11.

调试ie需要在`package.json`文件`browserslist.development` 添加`ie 11`并重启应用。

*note: 配置未生效可尝试删除`node_modules/.cache`目录并重启*

import React from "react"
import ReactDOM  from "react-dom"
import App from"./component/resume"

import 'antd/dist/antd.css';



// jsx=js+xml js可以嵌套js语言和html语言 用html标签不需要加引号
ReactDOM.render(<App></App>,
    document.getElementById("root"))
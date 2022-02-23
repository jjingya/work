import React, { Component } from 'react'
import './css/01-index.css'

export default class App extends Component {
  render() {
      var obj={
          background:"yellow",
        // 连接符—用驼峰写法代替
        fontSize:"300px"
      }


    return (
        // 对象写法
        <div>
      <div style={obj}>App</div>

      {/* react推荐我们使用行内样式，因为react觉得每一个组件都是一个整体 */}
      <div style={{background:"red"}}>加油吧 少年</div>
      {/* class要写成className  */}
      <div className="active">呜呜呜呜</div>

      <label htmlFor="username">用户名：</label>
      <input type="text" id='username'/>

        </div>
      

    )
  }
}

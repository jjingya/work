import React, { Component } from 'react'

export default class APP extends Component {
  render() {
    return (
      <div>
          <input/>
          <button onClick={ ()=>{
              console.log("click","如果处理逻辑过多，不推荐这种写法")
          }}>add1</button>

            {/* 外部的函数调用不用加括号 不然会自动执行 */}
            <button onClick={ this.handleClick2} >add3</button>

            <button onClick={ this.handleClick3} >add3</button>

            {/* 比较推荐这种写法 */}
            <button onClick={ ()=>this.handleClick4} >add4</button>

                </div>
        )
  }

  handleClick2(){
      console.log("click2")
  }

  handleClick3=()=>{
    console.log("click3")
}

handleClick4=()=>{
    console.log("click4")
}


}

import React, { Component } from 'react'

export default class APP extends Component {
    a=100
  render() {
    return (
      <div>
          <input/>
          <button onClick={ ()=>{
              console.log("click","如果处理逻辑过多，不推荐这种写法",this.a)
          }}>add1</button>

            {/* 外部的函数调用不用加括号 不然会自动执行 */}
            <button onClick={ this.handleClick2.bind(this)} >add2-不推荐这种写法</button>

            <button onClick={ this.handleClick3} >add3-推荐</button>

            {/* 比较推荐这种写法 */}
            <button onClick={ ()=>{this.handleClick4()}} >add4-比较推荐-传参</button>

                </div>
        )
  }

  handleClick2(){
      console.log("click2",this.a)
  }

//react并不会真正的绑定事件到每一个具体的元素上，而是采用事件代理的模式

  handleClick3=()=>{
    console.log("click3",this.a)
}

handleClick4=()=>{
    console.log("click4",this.a)
}


}


// 在js中， 改变this指向方向有三种，分别是
// call,改变this，自动执行函数
// apply,改变this，自动执行函数
// bind,改变this，手动执行函数 需要加（）执行函数

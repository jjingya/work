import React, { Component } from 'react'

class Child extends Component{
    render(){
        return <div>child</div>
    }
}


// 类
class Navbar extends Component{
    render(){
        return <div>navbar
            <Child></Child>
        </div>
    }
}

// 函数式
function Swiper(){
    return <div>Swiper</div>
}

// ES6的箭头函数式
const Tabbar=()=><div>tabbar</div>

export default class App extends Component {
  render() {
    return (
      <div>
          <Navbar></Navbar>
          <Swiper></Swiper>
          <Tabbar></Tabbar>
      </div>
    )
  }
}

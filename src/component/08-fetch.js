import React, { Component } from 'react'
import { Avatar,Comment,Button,Input,Tooltip } from 'antd';
import moment from 'moment';

// 添加评论
class CommentAdd extends Component {
    constructor() {
        super();

        this.state = {
            name:"",
            msg:""
        }
    }


    render() {
        return (
            <div>
               
                <Input placeholder="请输入用户名" value={this.state.name} onChange={e => this.handleChange1(e)} />
                <Input.TextArea rows={4}
                    value={this.state.msg}
                    placeholder="发布你的评论"
                    onChange={e => this.handleChange(e)} />
                <div className='Button'>
                    <Button type="submit" onClick={e => this.addComment()}>发布评论</Button>
                </div>


                


            </div>
        )
    }


    

    // 获取评论内容
    handleChange(event) {
        this.setState({
            msg: event.target.value
        })
    }

    // 获取名字
    handleChange1(event){
        this.setState({
            name: event.target.value
        }) 
    }

    // 添加评论中的属性
    addComment() {
        const commentInfo = {
          
            avatar: "https://joeschmoe.io/api/v1/random",
            name:this.state.name,
            msg: this.state.msg,
            time:moment()

        }

        fetch("http://yapi.smart-xwork.cn/mock/84769/flora-test/add",{
            method:"POST",
            body:JSON.stringify(commentInfo)
        })
       .then(res=>res.json())
       .catch(error=>console.error("Error",error))
       .then(response =>console.log("Success",response))
       

        // 清空评论中的东西
        this.props.submitComment(commentInfo);
        this.setState({
            name:"",
            msg:""
        })

    }



}

// 评论列表
class Commentlist extends Component {
    render() {
        const {
            name,
            avatar,
            msg,
            time
        } = this.props.comment;

        return (
           
            <Comment
                author={< a href=''>{name}</ a>}
                avatar={<Avatar src={avatar} alt={name}></Avatar>}
                content={<p>{msg}</p>}
                datetime={
                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                      <span>{moment().fromNow()}</span>
                    </Tooltip>
                  }
                
            />


        
            
            

        )
    }

    
}














export default class APP extends Component {

    constructor(){
        super();
        this.state={
            CommentItem: []
        };
    }





    componentDidMount(){
        // 网络请求
        var result=fetch("http://yapi.smart-xwork.cn/mock/84769/flora-test/list")
        // 返回结果
       .then(res =>{
           return res.json()
       })
       .then(json=>this.setState({CommentItem:json}))
    }

    
  render() {
  
    return (
       
        <div className='comment'>
                        <div className='list'>
                            {
                                this.state.CommentItem.map((item) => {

                                    return <Commentlist comment={item} key={item.name} />
                                })
                            }

                        </div>

                        <CommentAdd submitComment={info => this.submitComment(info)} />


                    </div>

    )
  }
  submitComment(info) {
    this.setState({
        CommentItem: [...this.state.CommentItem, info]
    })
}

}

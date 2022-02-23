import React, { Component } from 'react'
import { Avatar, Comment } from 'antd';

export default class Commentlist extends Component {
 render() {
 const{
 username,
 avatar,
 content
 }=this.props.comment;
 
 return (
 <div>
 <Comment>
 user={< a href='/#'>{username}</ a>}
 avatar={<Avatar src={avatar} alt={username}></Avatar>}
 content={<p>{content}</p>}
 </Comment>
 </div>
 )
 }

 removeItem(){
 this.props.removeItem();
 }
}

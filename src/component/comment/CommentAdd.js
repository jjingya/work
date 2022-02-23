import React, { Component } from 'react'
import { Input, Button, } from 'antd';

export default class CommentAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: ""
        }
    }


    render() {
        return (
            <div>
                <Input.TextArea rows={4}
                    value={this.state.content}
                    placeholder="发布你的评论"
                    onChange={e => this.handleChange(e)} />
                <Button type="primary" onClick={e => this.addComment()}>添加评论</Button>

            </div>
        )
    }


    // 获取评论内容
    handleChange(event) {
        this.setState({
            content: event.target.value
        })
    }

    // 添加评论中的属性
    addComment() {
        const commentInfo = {
            avatar: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic_360_360%2F58%2F87%2F98%2F588798aa14446663398793d8b94f48e6.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1648020281&t=a15cbba9403fd718cf9621b9e22bd4e5",
            username: "Jane",
            content: this.state.content,
            comments: []
        }

        // 清空评论中的东西
        this.props.submitComment(commentInfo);
        this.setState({
            content: ""
        })

    }





}

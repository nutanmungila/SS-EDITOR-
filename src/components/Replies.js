import React from 'react';
import { Button } from 'react-bootstrap';
import Reply from './Reply';
require('./App.css');

export default class Replies extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      replies:["","z"]
    }
    this.addReplyBox = this.addReplyBox.bind(this);
    //this.onClickRemoveHandle = this.onClickRemoveHandle.bind(this);
  }

  addReplyBox(){

    //this.state.replies.push("");

    // this.setState({
    //   replies: this.state.replies
    // });
  //  console.log(this.state.replies);
    this.props.addReply();

  }

  onClickRemoveHandle(index){
    //remove element from array
    console.log("remove -X")
    this.props.deleteReply(index);

  }

  render(){
    return(  <div>
                  {this.props.replies.map((reply,index) =>{
                    return (<Reply key={index} onClickRemove={this.onClickRemoveHandle.bind(this,index)}/>);
                  })}
                  <Button bsStyle="success" onClick={this.addReplyBox}>+</Button>
            </div>);
  }
}

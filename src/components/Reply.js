import React from 'react';
import { Button } from 'react-bootstrap';
require('./App.css');

export default class Reply extends React.Component{
  constructor(props){
    super(props);
  //  this.removeCurrentReply = this.removeCurrentReply.bind(this);

  }
  // removeCurrentReply(){
  //   console.log("clicked X");
  //   this.props.onClickRemove();
  //
  // }
  render(){
    return(  <div>
                        <div className="row">
                        <div className="col-md-1">Reply</div>
                        <input className="col-md-8" type="text" ></input>
                        <Button  bsStyle="success">Edit</Button>
                        <Button  bsStyle="danger" onClick={this.props.onClickRemove}>x</Button>
                        </div>
            </div>);
  }
}

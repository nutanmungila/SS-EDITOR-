import React from 'react';

import Trigger from './Trigger';
import Replies from './Replies';


import { Button } from 'react-bootstrap';

require('./App.css');

export default class Gambit extends React.Component {
  constructor(props) {
    super(props);

  }

  onEdit(){
    //dispatch(this.props.inputTrigger());
    this.props.inputTrigger();
  }

  render() {
    console.log(this.props.gambit);
    return (
      <div className="main-page">
      <Trigger />
      <Replies replies={this.props.gambit.replies}
        deleteReply={this.props.actions.deleteReply} addReply={this.props.actions.addReply}/>
      </div>
    );
  }
}

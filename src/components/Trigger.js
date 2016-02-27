import React from 'react';
require('./App.css');

export default class Trigger extends React.Component{
  constructor(props){
    super(props);
    //this.handleInputChange = this.handleInputChange.bind(this);
  }
  render(){
    return( <div>
              <div className="row">
              <div className="col-md-1">input</div>
              <input className="col-md-8" type="text" ></input>
              </div>
            </div>);
          }

};

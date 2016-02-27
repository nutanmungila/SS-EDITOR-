import React, { Component } from 'react';
import { Provider } from 'react-redux';
import GambitApp from './GambitApp';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <GambitApp />
      </Provider>
    );
  }
}


//model hierarchy -- tree
// should match
// view hierarchy -- tree..

//Always use model hierarchy tree to check -- model is the truth.
// view should just reflect that.. Now that you understand there is just 1 tree ( model )
// and we also know that there is only one tree for view as well - starting from your top most
// component. we are hooking the model tree ( store ) - with the view tree <Provider store={store}>
// Thats it..

//class reply
// addReplyBox() {
//this should be reply object
  //return function(){
    //addReply.apply(reply,arguments);
  //}
//}


// onClick={this.addReplyBox}

//window.onClick = this.addReplyBox.bind(this);

//internal
//window.onClick();

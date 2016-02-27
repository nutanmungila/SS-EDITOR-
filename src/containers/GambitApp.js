import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import Header from '../components/Header';
//import MainSection from '../components/MainSection';
import Gambit from '../components/Gambit';

import * as GambitActions from '../actions/GambitActions';

class GambitApp extends Component {
  render() {
    const { gambit , actions } = this.props;

    return (
      <div>
        <div> Hello Redux Gambit App </div>
        <Gambit gambit={gambit} actions={actions} > </Gambit>
      </div>
    );
  }
}

function mapState(state) {
  return {
    gambit: state.gambit
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(GambitActions, dispatch)
  };
}

export default connect(mapState, mapDispatch)(GambitApp);

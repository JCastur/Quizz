import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { questionAnswer } from './redux/actions'
import Navbar from './components/Navbar'
import Game from './components/Game'


class App extends Component {
  render() {
    return (

      <div>
      <Navbar/>
      <Game question={this.props.questions[this.props.currentQuestion ]}
        onQuestionAnswer={(answer)=>{
          this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
        }} />

      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
      ...state
    };
}

export default connect(mapStateToProps)(App);

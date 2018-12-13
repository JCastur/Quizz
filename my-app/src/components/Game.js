import React from 'react';
export default class Game extends React.Component {
  render() {
    return(
      <div>
     {JSON.stringify(this.props.question)}
     <input type="text" value={this.props.question.userAnswer || ''} onChange={(e)=>{
       this.props.onQuestionAnswer(e.target.value);
          }}/>
      </div>
    );
  }
}

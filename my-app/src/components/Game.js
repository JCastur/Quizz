import React from 'react';
import Pregunta from './Pregunta'
import Respuesta from './Respuesta'
import Actionbar from './Actionbar'

export default class Game extends React.Component {
  render() {
    return(

      <body>
        <div>
            <h1>{JSON.stringify(this.props.question)}</h1>
        </div>
        <div id = "pregunta">
            <Pregunta pregunta={this.props.question.question}/>
        </div>
        <div id = "respuesta">
            <Respuesta respuesta={this.props.question.userAnswer}/>
        </div>
      <input type="text" value={this.props.question.userAnswer || ''} onChange={(e)=>{
       this.props.onQuestionAnswer(e.target.value);
          }}/>
          <Actionbar/>
      </body>

    );
  }
}

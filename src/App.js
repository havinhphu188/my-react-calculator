import React, { Component } from 'react';
import './App.css';
import NumberButton from './components/NumberButton';
import SpecialButton from './components/SpecialButton';
import OperatorButton from './components/OperatorButton';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operand0:0,
      operand1:0,
      composingValue:'0',
      operator:'',
      result:0,
      screenDisplay:'0',
      isResetScreen: false
    };
  }

  handleOperatorButtonClick = function(operator){
    this.setState({
      operator: operator,
      isResetScreen: true,
      operand0: parseFloat(this.state.composingValue)
    }); 
  }


  handleNumberButtonClick = function(number){
    let newComposingValue = this.state.isResetScreen?number:this.state.composingValue + number;
    this.setState({
      composingValue: newComposingValue,
      screenDisplay: newComposingValue,
      isResetScreen: false
    });
  }

  handleCalculateButtonClick = function(){
    let result;
    let operand0 = this.state.operand0;
    let operand1 = parseFloat(this.state.composingValue);
    switch (this.state.operator) {
      case '+':
      result = operand0 + operand1;
        break;

      case '-':
      result = operand0 - operand1;
        break;

      case 'x':
      result = operand0 * operand1;
        break;    
    
      case '÷':
      result = operand0 / operand1;
        break;  

      default:
        break;
    }
    this.setState({
      result: result,
      screenDisplay: result,
      isResetScreen: true,
      operand0: result,
      operand1:  0
    });
  }
  
  handleACButtonClick = function(){
    this.setState({
      operand0:0,
      operand1:0,
      composingValue:'0',
      operator:'',
      result:0,
      screenDisplay:'0',
      isResetScreen: false
    });
  }

  //handle  +/-,  %, . button
  handleSpecialCharacterButtonClick = function(character){
    let newComposingValue = this.state.composingValue;
    switch (character) {
      case '.':
        newComposingValue += '.';
        break;

      case '%':
      {
        let newComposingValueNumberFormat = parseFloat(newComposingValue) * 0.01;
          newComposingValue = newComposingValueNumberFormat.toString() ;
        break;
      }

      case '+/-':
      {
        let newComposingValueNumberFormat = -parseFloat(newComposingValue);
        newComposingValue = newComposingValueNumberFormat.toString() ;
        break; 
      }

      default:
        break;
    }
    this.setState({
      composingValue: newComposingValue,
      screenDisplay: newComposingValue
    });
  }

  render() {
    return (
      <div className="App">
        <div className="component-display">{parseFloat(this.state.screenDisplay)}</div>

        <SpecialButton value="AC" onClick={()=> this.handleACButtonClick()}/>
        <SpecialButton value="+/-" onClick={()=> this.handleSpecialCharacterButtonClick('+/-')}/>
        <SpecialButton value="%" onClick={()=> this.handleSpecialCharacterButtonClick('%')}/>
        <OperatorButton value="+" onClick={()=> this.handleOperatorButtonClick('+')}/>

        <NumberButton value="1" onClick={()=> this.handleNumberButtonClick('1')}/>
        <NumberButton value="2" onClick={()=> this.handleNumberButtonClick('2')}/>
        <NumberButton value="3" onClick={()=> this.handleNumberButtonClick('3')}/>
        <OperatorButton value="-" onClick={()=> this.handleOperatorButtonClick('-')}/>

        <NumberButton value="4" onClick={()=> this.handleNumberButtonClick('4')}/>
        <NumberButton value="5" onClick={()=> this.handleNumberButtonClick('5')}/>
        <NumberButton value="6" onClick={()=> this.handleNumberButtonClick('6')}/>
        <OperatorButton value="x" onClick={()=> this.handleOperatorButtonClick('x')}/>

        <NumberButton value="7" onClick={()=> this.handleNumberButtonClick('7')}/>
        <NumberButton value="8" onClick={()=> this.handleNumberButtonClick('8')}/>
        <NumberButton value="9" onClick={()=> this.handleNumberButtonClick('9')}/>
        <OperatorButton value="÷" onClick={()=> this.handleOperatorButtonClick('÷')}/>
    
        <NumberButton value="0" onClick={()=> this.handleNumberButtonClick('0')}/>
        <NumberButton value="0" onClick={()=> this.handleNumberButtonClick('0')}/>
        <SpecialButton value="." onClick={()=> this.handleSpecialCharacterButtonClick('.')}/>
        <OperatorButton value="=" onClick={()=>this.handleCalculateButtonClick()}/>

      </div>
    );
  }
}

export default App;

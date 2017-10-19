import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      x: 0,
      y: 0
    };

    this.handleFirstNumber = this.handleFirstNumber.bind(this);
    this.handleSecondNumber = this.handleSecondNumber.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleSubtract = this.handleSubtract.bind(this);
    this.handleMultiply = this.handleMultiply.bind(this);
    this.handleDivide = this.handleDivide.bind(this);
  }

  handleFirstNumber(e) {
    this.setState({x: parseInt(e.target.value, 10)});
  }

  handleSecondNumber(e) {
    this.setState({y: parseInt(e.target.value, 10)});
  }

  handleAdd() {
    this.setState({
      result: this.state.x + this.state.y
    });
  }

  handleSubtract() {
    this.setState({
      result: this.state.x - this.state.y
    });
  }

  handleMultiply() {
    this.setState({
      result: this.state.x * this.state.y
    });
  }

  handleDivide() {
    this.setState({
      result: this.state.x / this.state.y
    });
  }

  render() {
    const {result, x, y} = this.state;

    return (
      <div className="calculator-container calc">
        <h2>Calculator</h2>
        <label htmlFor="num1">
          Number 1.
          <input
            id="num1"
            type="number"
            value={x}
            className="calculator-firstnumber"
            onChange={this.handleFirstNumber}
          />
        </label>
        <label htmlFor="num2">
          Number 2.
          <input
            id="num2"
            type="number"
            value={y}
            className="calculator-secondnumber"
            onChange={this.handleSecondNumber}
          />
        </label>
        <div>
          <p>
            <span>Resultatet er </span>
            <span className="calculator-result">
              {result}
            </span>
          </p>
        </div>
        <button
          className="button button-outline calculator-add"
          onClick={this.handleAdd}
        >
          Add
        </button>
        <button
          className="button button-outline calculator-subtract"
          onClick={this.handleSubtract}
        >
          Subtract
        </button>
        <button
          className="button button-outline calculator-multiply"
          onClick={this.handleMultiply}
        >
          Multiply
        </button>
        <button
          className="button button-outline calculator-divide"
          onClick={this.handleDivide}
        >
          Divide
        </button>
      </div>
    );
  }
}

export default Calculator;

import React, { Component } from "react";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";
import Form from "./components/Form/Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      todos: [],
    };
  }

  addItem = () => {
    const currentValue = this.state.userInput;

    if (this.state.userInput !== "") {
      const userInput = {
        id: Math.random(),
        content: currentValue,
      };

      this.setState({ todos: [...this.state.todos, userInput] }, () => {
        this.setState({
          userInput: "",
        });
      });
    }
  };

  onInputChange = (e) => {
    const newVal = e.target.value;
    this.setState({
      userInput: newVal,
    });
  };

  render() {
    return (
      <div className="App">
        <Form
          userInput={this.state.userInput}
          onInputChange={this.onInputChange}
          addItem={this.addItem}
        />
        {this.state.todos.length > 0 && (
          <div className="list">
            <TodoList todos={this.state.todos} />
          </div>
        )}
      </div>
    );
  }
}

export default App;

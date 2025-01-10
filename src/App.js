import React from "react";
import questionsData from "./questions.json";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      advice: "",
      questions: [...questionsData],
    };
  }

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    let { questions } = this.state;
    if (questions.length === 0) {
      questions = [...questionsData];
    }
    const randomIndex = Math.floor(Math.random() * questions.length);
    const advice = questions[randomIndex];
    questions.splice(randomIndex, 1);
    this.setState({ advice, questions });
  };

  render() {
    const { advice } = this.state;
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">❝{advice}❞</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>У меня все получается</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;

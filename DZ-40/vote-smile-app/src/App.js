import React from "react";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    const cards = {};
    this.props.voteCards.forEach((element) => {
      cards[element.name] = { counter: 0 };
    });
    this.state = cards;
  }
  handleClick(e) {
    if (e.target.dataset.id) {
      const state = this.state;
      state[e.target.dataset.id].counter += 1;
      this.setState(state);
    }
  }

  calculateResults() {
    const state = this.state;
    let result = {
      res: 0,
      name: "",
    };

    Object.entries(state).forEach((el) => {
      if (el[1].counter > result.res) {
        result.res = el[1].counter;
        result.name = el[0];
      }
    });
    return result;
  }

  showResults() {
    let state = this.state;
    const winner = this.calculateResults();
    state = Object.assign({}, { ...state }, { showResult: true, topPlace: winner });
    this.setState(state);
  }
  render() {
    return (
      <section className="App">
        <div
          className="container"
          onClick={(e) => {
            this.handleClick(e);
          }}
        >
          {this.props.voteCards.map((element, index) => {
            return (
              <button data-id={element.name} key={element.name + index} className="smileItem">
                <img src={element.img} alt={element.name} className="smile-img"></img>
                <h4 className="smile-title">{element.name}</h4>
                <p className="smile-counter">Counter: {this.state[element.name].counter}</p>
              </button>
            );
          })}
        </div>
        <button
          className="smile-cta"
          onClick={() => {
            this.showResults();
          }}
        >
          Show Winner
        </button>
        <div className={this.state.showResult === true ? "smile-results" : "smile-results hidden"}>
          <span>Winner is:</span> {this.state.topPlace && this.state.topPlace.name}
        </div>
      </section>
    );
  }
}

export default App;

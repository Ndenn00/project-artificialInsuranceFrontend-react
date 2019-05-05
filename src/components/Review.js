import React from "react";
import { generateTotalPrice } from "../utility/PriceUtil";


class Review extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentQuote: this.props.currentQuote
    };

    if (
      this.state.currentQuote.firstname === undefined ||
      this.state.currentQuote.firstname === null ||
      this.state.currentQuote.firstname.trim() === ""
    ) {
      alert("No Quote to Review");
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div className="container">
        {this.state.currentQuote.method === "Wizard" ? (
          <WizardQuote {...this.state} />
        ) : (
          <ReturningQuote />
        )}
      </div>
    );
  }
}

class WizardQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuote: this.props.currentQuote
    };
  }

  componentWillMount() {
    var currentQuote = { ...this.state.currentQuote };
    currentQuote.totalPrice = generateTotalPrice(currentQuote);
    this.setState({ currentQuote });
  }

  render() {
    return <div>Hello okay</div>;
  }
}

class ReturningQuote extends React.Component {
  constructor(props) {}
}

export default Review;

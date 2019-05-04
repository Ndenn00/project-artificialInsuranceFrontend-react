import React from "react";
import { generateTotalPrice } from "../utility/PriceUtil";

// const quoteOrigin = s  =>{

// }

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

  componentWillMount() {
    var currentQuote = { ...this.state.currentQuote };
    currentQuote.totalPrice = generateTotalPrice(currentQuote);
    this.setState({ currentQuote });
  }

  render() {
    return (
      <div className="container">
        Made it!
        {this.state.currentQuote.firstname}
      </div>
    );
  }
}

export default Review;

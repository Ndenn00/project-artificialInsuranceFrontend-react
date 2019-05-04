import React from "react";
import { generateTotalPrice } from "../utility/PriceUtil";

class Review extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentQuote: this.props.currentQuote
    };
  }

  componentWillMount() {
    
  }

  render() {
    return (
      <div className="container">
        Made it!
        {this.state.firstname}
      </div>
    );
  }
}

export default Review;

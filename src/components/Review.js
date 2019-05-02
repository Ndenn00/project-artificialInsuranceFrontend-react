import React from "react";

class Review extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      firstname: this.props.values.firstname
    }


  }

  componentDidMount(){}

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

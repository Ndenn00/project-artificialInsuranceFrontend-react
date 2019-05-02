import React from "react";

class Review extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      
    }


  }

  

  render() {
    return (
      <div className="container">
        Made it!    
        {this.props.quoteValues.firstname}  
         
       
      </div>
    );
  }
}

export default Review;

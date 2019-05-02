import React from "react";


const Banner = ({header, blurb}) => {
  return (
    <div className="row center home-row">
      <h2 className="header center orange-text">{header}</h2>
      <h5 className="header col s12 light home-row">{blurb}</h5>
    </div>
  );
};

export default Banner; 

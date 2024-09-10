import React from 'react'
import HeadingTwo from '../Headings/HeadingTwo';

const MarketCard = ({ flyer, logo, title, subtitle }) => {
  return (
    <div className="marketCard">
      <img src={flyer} alt="" className="bizflyer" />
      <div className="details justify-center item-center">
        <img src={logo} alt="" className="bizlogo" />
        <div>
          <HeadingTwo title={title} color="textblack" />
          <span>{subtitle}</span>
        </div>
      </div>
    </div>
  );
};

export default MarketCard
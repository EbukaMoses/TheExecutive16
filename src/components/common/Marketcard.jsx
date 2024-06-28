import React from 'react'
import HeadingTwo from './HeadingTwo';

const Marketcard = ({flyer, logo, title, subtitle}) => {
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
}

export default Marketcard
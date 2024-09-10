import React from 'react'

const ComradeCard = () => {
  return (
    <div className="whowehavecard">
      <img src={ihuoma} alt="whow" />
      <div className="details flex-column justify-center item-center">
        <HeadingTwo title="Ihuoma Kamalu" color="textblack" />
        <HeadingThree title="Ass. Course Rep" color="textblack" />
      </div>
    </div>
  );
}

export default ComradeCard
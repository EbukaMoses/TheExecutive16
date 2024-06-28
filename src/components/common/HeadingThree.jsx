import React from 'react'

const HeadingThree = ({color, title}) => {
    return <div className={`HeadingThree ${color}`}>{ title }</div>;
}

export default HeadingThree
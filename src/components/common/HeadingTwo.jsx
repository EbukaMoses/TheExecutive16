import React from 'react'

const HeadingTwo = ({color, title}) => {
    return <div className={`HeadingTwo ${color}`}>{ title }</div>;
}

export default HeadingTwo

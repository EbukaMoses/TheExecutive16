import React from 'react'

const HeadingOne = ({color, title}) => {
    return <div className={`HeadingOne ${color}`}>{ title }</div>;
}

export default HeadingOne
import React from 'react'

const PicOfDay = (props) => {
    const { copyright, title, explanation, url, date } = props.pictureData
    return (
        <div>
            <h1>{title}</h1>
            <h2> - {copyright}</h2>
            <img src={url} alt="" srcSet="" />
            <h6>{date}</h6>
            <p> {explanation} </p>
        </div>
    )
}

export default PicOfDay

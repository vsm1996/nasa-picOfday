import React from 'react'
import './picOfDay.css'

const PicOfDay = (props) => {
    const { copyright, title, explanation, url, date } = props.pictureData
    return (
        <div>
            <h1 className="title">{title}</h1>
            <h2 className="copyright"> - {copyright}</h2>
            <img className="image" src={url} alt="" srcSet="" />
            <h6 className="date">{date}</h6>
            <p className="explanation"> {explanation} </p>
        </div>
    )
}

export default PicOfDay

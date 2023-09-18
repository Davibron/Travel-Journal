import React from "react"

export default function Info(props) {
  return (
    <div className="info">
      <img src={`../images/${props.img}`} className="display-img"/>
      <div className="travel-info">
        <div className="location-container">
          <div className="location">
            <img src="../images/icons8-location-24.png" className="location-icon" />
            {props.country}
          </div>
          <a href={props.map}>View on Google Maps</a>
        </div>
        <h3 className="name">{props.location}</h3>
        <p className="date">{props.date}</p>
        <p className="description">{props.description}</p>
      </div>
    </div>
  )
}
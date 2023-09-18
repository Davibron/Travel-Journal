import React from "react"
import Info from "./Info"
import travelData from "./travelData"

export default function App() {
  const dataElement = travelData.map(data => {
    return <Info 
      {...data}
    />
  })

  return (
    <div>
      <div className="navbar">
        <img className="world" src="../images/icons8-world-26.png" />
        My Travel Journey.
      </div>
      {dataElement}
    </div>
  )
}
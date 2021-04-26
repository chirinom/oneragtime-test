import React from 'react'
import './Cards.css'

import VisibilitySensor from "react-visibility-sensor";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Card({title, number, path, trail, pct}) {
  return (
    <div className="card-container">
      <div className="ring" style={{ width: "90px", margin:'25px auto' }}>
        <VisibilitySensor>
          {({ isVisible }) => {
            const percentage = isVisible ? pct : 0;
            return (
              <CircularProgressbar
                value={percentage}
                strokeWidth= '16'
                styles={buildStyles({
                  pathColor: path,
                  trailColor: trail,
                  pathTransitionDuration: 2,
                })}
              />
            );
          }}
        </VisibilitySensor>
      </div>
      <h3 className="card-number">{number}</h3>
      <h6 className="card-title">{title}</h6>
    </div>
  )
}

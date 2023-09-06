import React from 'react'
import './MyEvents.scss'

export default function MyEvents() {
  return (
    <div className='my-events-wrap'>
      <h4>Upcoming events</h4>
      <div className='my-events-card'>
        <div className='card-featured'>
          <img src="src/assets/featured.png" alt="reatured" />
        </div>
        <div>
          <img className="card-event" src="src/assets/event-logo.png" alt="event" />
        </div>
        <div className='my-events-info'>
          <p className='info-event'>Crypto 101</p>
          <div className='info-date'>April 14, 2024 · 4pm - April 21, 2024 · 8pm <br />WITA</div>

          <div className='info-location'>
            <img src="src/assets/environment.svg" alt="environment" />
            <div className='info-city'>&lt;City&gt;</div>
            <img src="src/assets/Ellipse.svg" alt="ellipse" />
            <div className='info-country'>&lt;Coutry&gt;</div>
          </div>
          <button className='info-button'>Free</button>
        </div>
      </div>
      <h4>Past events</h4>
      <div>You have no past events</div>
    </div>
  )
}

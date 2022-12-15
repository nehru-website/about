import React from 'react'

export default function Card_1() {
let text="Nehru Hall of Residence, named after Motilal Nehru, is the second oldest hall in IIT Kharagpur. It was inauguratd on 3rd March 1954 by.."
  return (
      <div className="card1">
          <h1>About</h1>
          <p>{text}</p>
          <button type="button">Read More</button>
        </div>
  )
}

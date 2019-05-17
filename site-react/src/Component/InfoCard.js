import React, { useState } from 'react';

const InfoCard = (props) => {
  const [showCard, setShowCard] = useState({
    show: false
  })

  const showCardHandler = (e) => {
    setShowCard({
      show: !showCard.show
    })
  }
  return (
    <div className="my-1 p-2 shadow-lg bg-transparent">
      {
        showCard.show ?

          <div className="card m-4">
            <div className="card-header">
              <h4>Name: {props.firstName} {props.lastName}</h4>
            </div>
            <div className="card-body">
              <p>Username: {props.userName}</p>
              <p>email: {props.email}</p>
            </div>
            <div className="card-footer">
              <p>Status: {props.status}</p>
            </div>
          </div> : null
      }
      <button onClick={showCardHandler} className="btn btn-danger text-white font-weight-bolder">See More</button>
    </div>
  )
}

export default InfoCard;
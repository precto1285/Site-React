import React from 'react';

const InfoCard = (props) => {
  return (
    <div className="my-1 p-2 shadow-lg bg-transparent">
      <div className="card">
        <div className="card-header">
          <h4>Name: {props.firstName} {props.lastName}</h4>
        </div>
        <div className="card-body">
          <p>Username: {props.userName}</p>
          <p>email: {props.email}</p>
          <p>Status: {props.status}</p>
        </div>
        <div className="card-footer">

        </div>
      </div>
      <button className="btn btn-danger text-white font-weight-bolder">See More</button>
    </div>
  )
}

export default InfoCard;
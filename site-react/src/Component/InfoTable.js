import React from 'react';

const InfoTable = (props) => {

  return (
    <tr>
      <th scope="row">{props.key}</th>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.userName}</td>
      <td>{props.email}</td>
      <td>{props.status}</td>
    </tr>
  )
}
export default InfoTable;
import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({player}) => {
  return (
    <tr>
      <th>{player.name}</th>
      <td>{player.nationality}</td>
      <td>{player.position}</td>
      <td>{player.jerseyNumber}</td>
      <td>{player.age}</td>
      <td>{player.contractUntil}</td>
    </tr>
  );
};

export default TableRow;
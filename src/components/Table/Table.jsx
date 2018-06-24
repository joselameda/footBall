import React, { PureComponent,Component } from 'react';
import TableRow from './Components/TableRow';
import TableHead from './Components/TableHead';

class Table extends PureComponent {

  render (){
    const playersData = this.props.players;
    const rows =(Object.keys(playersData).length !== 0)? playersData.map((row) =><TableRow key = {row.name} player = {row}/>) : null;
    return (
      <div className="columns">
          <div className="column">
              <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                  <thead>
                  <TableHead />
                  </thead>
                  <tbody>
                  {rows}
                  </tbody>
              </table>
          </div>
      </div>
    );
  }
}

export default Table;

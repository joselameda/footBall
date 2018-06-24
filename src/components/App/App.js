import React, { Component } from 'react';
import './App.css';
import Table from '../Table/Containers/tableContainer';
import Header from '../Header/Header';
import SearchBar from '../SearchBar/Containers/searchBarContainer';

class App extends Component {
  componentDidMount() {
    this.props.fetchPlayers();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid" style={{padding:30}}>
          <div className="content">
            <SearchBar />
            <Table />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

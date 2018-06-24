import React, { PureComponent,Component } from 'react';
import SearchName from './Components/SearchName';
import SearchAge from './Components/SearchAge';
import SearchPosition from './Components/SearchPosition';

class SearchBar extends PureComponent {

  render (){
    return (
      <div className="columns" >
        <div className="column">
          <SearchName nameSearch = {this.props.nameSearch} onChange ={this.props.setNameSearch} />
        </div>
        <div className="column">
          <SearchAge ageSearch = {this.props.ageSearch} onChange = {this.props.setAgeSearch} />
        </div>
        <div className="column">
          <SearchPosition positionSearch = {this.props.positionSearch}  onChange = {this.props.setPositionSearch} />
        </div>
      </div>
    );
  }
}

export default SearchBar;

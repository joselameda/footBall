import React, {Component} from 'react';

class SearchAge extends Component {
  constructor(){
    super();
    this.onChange = this.onChange.bind(this);
  }
  onChange({target : {value} }){
    this.props.onChange(value);
  }

  render(){
    return (
      <div>
          <input
            className="input"
            type="number"
            placeholder="Insert age search"
            onChange={this.onChange}/>
      </div>
    );
  }
};

export default SearchAge;
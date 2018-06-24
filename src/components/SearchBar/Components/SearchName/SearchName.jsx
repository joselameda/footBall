import React,{Component} from 'react';

class SearchName extends Component  {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
  }

  onChange({ target: { value } }) {
    this.props.onChange(value);
  }
  render(){
    const nameSearch = this.props.nameSearch;
    return (
      <div>
          <input
            className="input"
            type="text"
            value = {nameSearch}
            placeholder="Insert name search"
            onChange={this.onChange}/>
      </div>
    );
  }
};

export default SearchName;
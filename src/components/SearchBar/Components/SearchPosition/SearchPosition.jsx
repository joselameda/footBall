import React,{Component} from 'react';

class SearchPosition extends Component {
  constructor(){
    super();
    this.onChange = this.onChange.bind(this);
  }
  onChange({target : {value} }){
    this.props.onChange(value);
  }

  render() {
    const options = [
      'Attacking Midfield',
      'Central Midfield',
      'Centre-Back',
      'Centre-Forward',
      'Defensive Midfield',
      'Keeper',
      'Left Midfield',
      'Left Wing',
      'Left-Back',
      'Right-Back',
    ];
    const optionsSelect = options.map(option => <option key={option} value={option}>{option}</option>)
    return (
      <div>
          <div className="select">
              <select onChange={this.onChange} value={this.props.positionSearch} >
                  <option value={""}>Select Position</option>
                {optionsSelect}
              </select>
          </div>
      </div>
    );
  }
};
export default SearchPosition;
import { connect } from 'react-redux';
import SearchBar from '../SearchBar';
import actions from '../../../actions'
import * as appSelector from '../../../selectors/app'


export const mapStateToProps = state => ({
  nameSearch : appSelector.nameSearchSelector(state),
  ageSearch : appSelector.ageSearchSelector(state),
  positionSearch : appSelector.positionSearchSelector(state),
});

export const mapDispatchToProps = dispatch => ({
  setNameSearch(nameSearch) {
    dispatch(actions.app.setNameSearch(nameSearch));
  },
  setAgeSearch(ageSearch) {
    dispatch(actions.app.setAgeSearch(ageSearch));
  },
  setPositionSearch(positionSearch) {
    dispatch(actions.app.setPositionSearch(positionSearch));
  },
});

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);

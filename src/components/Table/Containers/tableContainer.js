import { connect } from 'react-redux';
import Table from '../Table';
import * as playerSelector from '../../../selectors/player'

export const mapStateToProps = state => (
 {  players : playerSelector.playersFilteredSelector(state) }
);

export default connect(mapStateToProps)(Table);

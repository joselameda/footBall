import { connect } from 'react-redux';
import App from '../App';
import {fetchPlayers} from '../../../effects/player';

export const mapDispatchToProps = dispatch => ({
  fetchPlayers() {
    dispatch(fetchPlayers());
  },
});

export default connect(null, mapDispatchToProps)(App);

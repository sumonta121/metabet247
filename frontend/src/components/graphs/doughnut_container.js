import { connect } from 'react-redux';
import { getGameBets } from '../../actions/bet_actions';
import OddsPercentageDoughnut from './odds_percentage_doughnut';


const mSTP = (state, ownProps) => ({
    game: ownProps.g,
    games: state.games,
});

const mDTP = dispatch => ({
  
});

export default connect(mSTP, null)(OddsPercentageDoughnut);
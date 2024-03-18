import { connect } from 'react-redux';
import ScrollBar from './scroll_bar';


const mSTP = state => ({
    games: Object.values(state.games)

});

const mDTP = dispatch => ({
    fetchAllGames: () => dispatch()
})

export default connect(mSTP, mDTP)(ScrollBar);
import { connect } from 'react-redux';
import { logout, fetchUser } from '../../actions/session_actions';


import MainPage from './main_page';


const mSTP = state => ({
  loggedIn: state.session.isAuthenticated,
  userId: state.session.user._id
});

const mDTP = dispatch => ({
   
    logout: () => dispatch(logout()),
    
    fetchUser: (userId) => dispatch(fetchUser(userId))
  });

export default connect(mSTP, mDTP)(MainPage);
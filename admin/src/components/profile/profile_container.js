import React from 'react';
import { connect } from 'react-redux';
import Profile from './profile';
import { fetchUser } from '../../actions/session_actions'

const mSTP = (state) => ({
    currentUser: state.session.user,
    bets: state.bets
})

const mDTP = (dispatch) => ({
    fetchUser: (userId) => dispatch(fetchUser(userId))

})

export default connect(mSTP, mDTP)(Profile)
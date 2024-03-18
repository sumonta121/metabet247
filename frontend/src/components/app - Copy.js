import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';

// components
import HomePage from './frontend/index';
import Dashboard from './frontend/user/dashboard';

 import MainPageContainer from './main/main_page_container';
// import LoginFormContainer from './session/login_form_container';
 import SignupFormContainer from './session/signup_form_container'; 
// import SplashForm from './splash/splash_form';
 import ProfileContainer from './profile/profile_container';
// import ShowGameContainer from './games/show_game_container';

// import './reset.css'
// import './splash/splash.css'
// import './nav/navbar.css'
// import './session/login_form.css'
 import './session/signup_form.css'
// import '../components/games/game_index_item.css'
// import './bet_modal/bet_modal.css'
 import './profile/profile.css'
// import './games/game_index_item.css'
// import './games/show_game.css'
// import './comments/comments.css'
 import './toast/toast.css'
 import './main/main.css'
// import './scroll_bar/scroll_bar.css'
// import './games/games_list.css'

import { fetchUser } from '../util/session_api_util';
//import './tutorial/tutorial.css'


const App = () => (
  <div>
    <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/profile" component={ProfileContainer} />
        {/* <ProtectedRoute exact path="/dashboard" component={Dashboard} /> */}
        {/* <AuthRoute exact path="/dashboard" component={Dashboard} />
        <ProtectedRoute exact path="/profile" component={ProfileContainer} /> */}
        {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
    
        <ProtectedRoute exact path="/game/show/:id" component={ShowGameContainer} />
      
        <ProtectedRoute exact path="/main" component={MainPageContainer} />
               */}
        
    </Switch>
  </div>
);

export default App;
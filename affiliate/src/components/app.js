import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
// import { BrowserRouter, Routes } from "react-router-dom";

// components
import HomePage from './frontend/index';
import Dashboard from './frontend/user/dashboard';
 import MainPageContainer from './main/main_page_container';
import LoginFormContainer from './session/login_form_container';
import ProfileContainer from './profile/profile_container';
import './profile/profile.css'
import './toast/toast.css'
import './main/main.css'
import { fetchUser } from '../util/session_api_util';
import test from './main/test';
import Admin_fr from './frontend/admin_fr';
import Withdraw from './Withdraw/withdraw.js';
import BlFromAdmin from './BalanceFromAdminReport/list.js';
import ProfileManage from './ProfileManage/ProfileManage.js';
import PasswordManage from './ProfileManage/PasswordManage.js';
import TpinManage from './ProfileManage/TpinManage.js';
// import PromoCode from './PromoCode/PromoCode.js';
// import PromoCodeList from './PromoCode/list.js';
// import PromoCodeShow from './PromoCode/show.js';

import AffiliateLink from './AffiliateLink/AffiliateLink.js';
import AffiliateLinkList from './AffiliateLink/list.js';
import AffiliateLinkShow from './AffiliateLink/show.js';

import SubAffiliateCreate from './SubAffiliate/create';
import SubAffiliateEdit from './SubAffiliate/edit';
import SubAffiliateList from './SubAffiliate/list';



const App = () => (

  

  <div>

    <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <ProtectedRoute exact path="/profile" component={ProfileContainer} />
        <ProtectedRoute exact path="/affiliate" component={HomePage } />

        <ProtectedRoute exact path="/withdraw" component={Withdraw } />
        <ProtectedRoute exact path="/balance-from-admin" component={BlFromAdmin } />

        <ProtectedRoute exact path="/profile-manage" component={ProfileManage } />
        <ProtectedRoute exact path="/password-manage" component={PasswordManage } />
        <ProtectedRoute exact path="/tpin-manage" component={TpinManage } />

        {/* <ProtectedRoute exact path="/affiliate-promocode" component={PromoCode } />
        <ProtectedRoute exact path="/affiliate-promocode-list" component={PromoCodeList } />
        <ProtectedRoute exact path="/affiliate-promocode-show" component={PromoCodeShow } /> */}
        
        <ProtectedRoute exact path="/affiliate-link" component={AffiliateLink } />
        <ProtectedRoute exact path="/affiliate-link-list" component={AffiliateLinkList } />
        <ProtectedRoute exact path="/affiliate-link-show" component={AffiliateLinkShow } />


        <ProtectedRoute exact path="/subsffiliate-create" component={SubAffiliateCreate } />
        <ProtectedRoute exact path="/subaffiliate-index" component={SubAffiliateList } />
        <ProtectedRoute exact path="/editSubAffiliate/:usAutoId" component={SubAffiliateEdit } /> 

        <Route path="/" component={Admin_fr} />

        {/* <ProtectedRoute exact path="/admin" component={MainPageContainer } /> */}
        
    </Switch>

    

  </div>
);

export default App;
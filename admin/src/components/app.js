import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
// import { BrowserRouter, Routes } from "react-router-dom";

// components
import HomePage from './frontend/index';
import Dashboard from './frontend/user/dashboard';

 import MainPageContainer from './main/main_page_container';
import LoginFormContainer from './session/login_form_container';

// import SplashForm from './splash/splash_form';
 import ProfileContainer from './profile/profile_container';


// import './reset.css'
// import './splash/splash.css'
// import './nav/navbar.css'
// import './session/login_form.css'

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
import test from './main/test';
import Admin_fr from './frontend/admin_fr';
import Down from './frontend/down';
import AgentBalList from './agent_bl_tr/list.js';
import AgentBalTransfer from './agent_bl_tr/transfer.js';

import AgentCreate from './agent/create';
import AgentEdit from './agent/edit';
import AgentList from './agent/list';
import InactiveAgent from './agent/inactiveAgent';

import SuperAgent from './superAgent/superAgent';
import InactiveSuperAgent from './superAgent/inactiveSuperAgent';
import Editsuperagent from './superAgent/editsuperagent';

import MasterAgent from './masterAgent/masterAgent';
import InactivemasterAgent from './masterAgent/inactivemasterAgent';
import Editmasteragent from './masterAgent/editmasteragent';


import AffiliateCreate from './affiliate/create';
import AffiliateEdit from './affiliate/edit';
import AffiliateList from './affiliate/list';

import UserList from './userList/UserList';
import InactiveUserList from './userList/Inactivelist';
import AgentBalanceReport from './AgentBalanceReport/list';

import casinoList from './CasinoList/List';
import casinoGameEdit from './CasinoList/casinoGameEdit';
//import InactiveCasino from './userList/InactiveCasino';

import WithdrawPending from './withdraw/pending';
import WithdrawPaid from './withdraw/paid';
import WithdrawRejected from './withdraw/rejected';
import WithdrawBlock from './withdraw/block';

import ProfileManage from './ProfileManage/ProfileManage.js';
import PasswordManage from './ProfileManage/PasswordManage.js';
import TpinManage from './ProfileManage/TpinManage.js';

import BasicSetting from './BasicSetting/BasicSetting.js';
import BasicSettingEdit from './BasicSetting/BasicSettingEdit.js';
import BasicSettingList from './BasicSetting/list.js';

import FaviconSetting from './FaviconSetting/FaviconSetting.js';
import FaviconSettingEdit from './FaviconSetting/FaviconSettingEdit.js';
import FaviconSettingList from './FaviconSetting/list.js';


import SendMoneyLimit from './SendMoneyLimit/SendMoneyLimit.js';
import SendMoneyLimitEdit from './SendMoneyLimit/SendMoneyLimitEdit.js';
import SendMoneyLimitList from './SendMoneyLimit/list.js';


import PermissionSetting from './PermissionSetting/PermissionSetting.js';
import PermissionSettingEdit from './PermissionSetting/PermissionSettingEdit.js';
import PermissionSettingList from './PermissionSetting/list.js';


import SlideManage from './SlideManage/SlideManage.js';
import NoticeManage from './NoticeManage/NoticeManage.js';
import PromoCode from './PromoCode/PromoCode.js';
import PromoCodeList from './PromoCode/list.js';
import PromoCodeShow from './PromoCode/show.js';

import EditUser from "./userList/EditUser";

const App = () => (
  <div>

    <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <ProtectedRoute exact path="/profile" component={ProfileContainer} />
        <ProtectedRoute exact path="/admin" component={HomePage } />
        <ProtectedRoute exact path="/agent-bal-list" component={AgentBalList } />
        <ProtectedRoute exact path="/agent-bal-tr" component={AgentBalTransfer } />
      
        <ProtectedRoute exact path="/agent-index" component={AgentList } />
        <ProtectedRoute exact path="/inactive-agent" component={InactiveAgent } />
        <ProtectedRoute exact path="/agent-create" component={AgentCreate } />
        <ProtectedRoute exact path="/editagent/:_id" component={AgentEdit } /> 

              
        <ProtectedRoute exact path="/super-agent" component={SuperAgent} />
        <ProtectedRoute exact path="/inactive-super-agent" component={InactiveSuperAgent } />
        <ProtectedRoute exact path="/edit-super-agent/:_id" component={Editsuperagent } /> 

       
        <ProtectedRoute exact path="/master-agent" component={MasterAgent} />
        <ProtectedRoute exact path="/inactive-master-agent" component={InactivemasterAgent } />
        <ProtectedRoute exact path="/edit-master-agent/:_id" component={Editmasteragent } /> 


        <ProtectedRoute exact path="/affiliate-index" component={AffiliateList } />
        <ProtectedRoute exact path="/affiliate-create" component={AffiliateCreate } />
        <ProtectedRoute exact path="/editAffiliate/:_id" component={AffiliateEdit } />

        <ProtectedRoute exact path="/user-index" component={UserList } />
        <ProtectedRoute exact path="/inactive-user" component={InactiveUserList} />

        <ProtectedRoute exact path="/casino-list" component={casinoList} />
        <ProtectedRoute exact path="/casino-game-edit/:_id" component={casinoGameEdit } /> 


        <ProtectedRoute exact path="/edit-user/:id" component={EditUser } />
        <ProtectedRoute exact path="/agent-balance-report" component={AgentBalanceReport } />
 
        <ProtectedRoute exact path="/withdraw-pending" component={WithdrawPending } />
        <ProtectedRoute exact path="/withdraw-paid" component={WithdrawPaid } />
        <ProtectedRoute exact path="/withdraw-rejected" component={WithdrawRejected } />
        <ProtectedRoute exact path="/withdraw-block" component={WithdrawBlock } />

        <ProtectedRoute exact path="/profile-manage" component={ProfileManage } />
        <ProtectedRoute exact path="/password-manage" component={PasswordManage } />
        <ProtectedRoute exact path="/tpin-manage" component={TpinManage } />

        <ProtectedRoute exact path="/basic-setting" component={BasicSetting } />
        <ProtectedRoute exact path="/editbasic/:id" component={BasicSettingEdit } />
        <ProtectedRoute exact path="/basic-setting-list" component={BasicSettingList } />
        
        <ProtectedRoute exact path="/favicon-setting" component={FaviconSetting } />
        <ProtectedRoute exact path="/editFavicon/:id" component={FaviconSettingEdit } />
        <ProtectedRoute exact path="/favicon-setting-list" component={FaviconSettingList } />

        <ProtectedRoute exact path="/send-money-limit" component={SendMoneyLimit } />
        <ProtectedRoute exact path="/editsendmoneylimit/:id" component={SendMoneyLimitEdit } />
        <ProtectedRoute exact path="/send-money-limit-list" component={SendMoneyLimitList } /> 
        
        <ProtectedRoute exact path="/permission-setting" component={PermissionSetting } />
        <ProtectedRoute exact path="/editPermission/:id" component={PermissionSettingEdit } />
        <ProtectedRoute exact path="/permission-setting-list" component={PermissionSettingList } /> 
        
        <ProtectedRoute exact path="/slide-manage" component={SlideManage } />
        <ProtectedRoute exact path="/notice-manage" component={NoticeManage } />

        <ProtectedRoute exact path="/promo-code" component={PromoCode } />
        <ProtectedRoute exact path="/promo-code-list" component={PromoCodeList } />
        <ProtectedRoute exact path="/admin-promocode-show" component={PromoCodeShow } />

        <Route path="/" component={Admin_fr} />
        
        {/* <Route path="/" component={Down} /> */}

        {/* <ProtectedRoute exact path="/admin" component={MainPageContainer } /> */}
        
    </Switch>

    

  </div>
);

export default App;
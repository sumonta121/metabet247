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
import UserBalList from './user_bl_tr/list.js';
import UserBalTransfer from './user_bl_tr/transfer.js';
import UserBalanceReport from './UserBalanceReport/list.js';

import balanceWithdraw from './Withdraw/withdraw.js';
import balanceWithdrawReport from './Withdraw/agenWithdrawList.js';


import addWallet from './addWallet/transfer.js';
import addWalletReport from './addWallet/list.js';
import agentWalletEdit from './addWallet/edit.js';
import PendingBalanceRequest from './addWallet/pendingBalanceRequest.js';
import PendingWithdrawRequest from './Withdraw/pendingWithdrawRequest.js';

import Withdraw from './Withdraw/withdraw.js';
import BlFromAdmin from './BalanceFromAdminReport/list.js';
import CashIn from './CashIn/cashin.js';
import cashinHistory from './CashIn/cashinHistory.js';
import masterAgentist from './CashIn/masterAgentList.js';
import addBalance from './AddBalance/addBalance.js';
import addBalanceHistory from './AddBalance/addBalanceHistory.js';
import ProfileManage from './ProfileManage/ProfileManage.js';
import PasswordManage from './ProfileManage/PasswordManage.js';
import TpinManage from './ProfileManage/TpinManage.js';
import GameSync from './ProfileManage/GameSync.js';

import SubResellerCreate from './SubReseller/create';
import SubResellerEdit from './SubReseller/edit';
import SubResellerList from './SubReseller/list';

import AffiliateCreate from './affiliate/create';
import AffiliateEdit from './affiliate/edit';
import AffiliateList from './affiliate/list';
import RefferedList from './affiliate/refferedList';
import BalanceDeposit from './deposit/balanceDeposit';
import AgentDepositList from './deposit/AgentDepositList';
import chats from './chats/ChatsHistory';
import chatWith from './chats/ChatWith';
import NewChats from './chats/NewChats';
import Down from './frontend/down';


const App = () => (
  <div>

    <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <ProtectedRoute exact path="/profile" component={ProfileContainer} />
        <ProtectedRoute exact path="/agent" component={HomePage } />

        <ProtectedRoute exact path="/user-bal-list" component={UserBalList } />
        <ProtectedRoute exact path="/user-bal-tr" component={UserBalTransfer } />
        <ProtectedRoute exact path="/user-balance-report" component={UserBalanceReport } />
        <ProtectedRoute exact path="/pending-balance-request" component={PendingBalanceRequest } />
        <ProtectedRoute exact path="/pending-withdraw-request" component={PendingWithdrawRequest } />

        <ProtectedRoute exact path="/add-wallet" component={addWallet } />
        <ProtectedRoute exact path="/add-wallet-list" component={addWalletReport } />
        <ProtectedRoute exact path="/agent-wallet-edit/:_id" component={agentWalletEdit } />


        <ProtectedRoute exact path="/withdraw" component={Withdraw } />
        <ProtectedRoute exact path="/balance-from-admin" component={BlFromAdmin } />

        <ProtectedRoute exact path="/cashin" component={CashIn} />
        <ProtectedRoute exact path="/cashin-history" component={cashinHistory} />
        <ProtectedRoute exact path="/master-agent-list" component={masterAgentist} />

        <ProtectedRoute exact path="/add-balance" component={addBalance} />
        <ProtectedRoute exact path="/add-balance-history" component={addBalanceHistory} />

        <ProtectedRoute exact path="/balance-withdraw" component={balanceWithdraw } />
        <ProtectedRoute exact path="/balance-withdraw-history" component={balanceWithdrawReport } />


        <ProtectedRoute exact path="/profile-manage" component={ProfileManage } />
        <ProtectedRoute exact path="/password-manage" component={PasswordManage } />
        <ProtectedRoute exact path="/tpin-manage" component={TpinManage } />
        <ProtectedRoute exact path="/game-sync" component={GameSync} />

        <ProtectedRoute exact path="/subreseller-create" component={SubResellerCreate } />
        <ProtectedRoute exact path="/subreseller-index" component={SubResellerList } />
        <ProtectedRoute exact path="/editsubreseller/:usAutoId" component={SubResellerEdit } /> 

        <ProtectedRoute exact path="/balance-deposit" component={BalanceDeposit } />
        <ProtectedRoute exact path="/agent-deposit-list" component={AgentDepositList } />
        <ProtectedRoute exact path="/affiliate-index" component={AffiliateList } />
        <ProtectedRoute exact path="/reffered-list" component={RefferedList } />
        <ProtectedRoute exact path="/affiliate-create" component={AffiliateCreate } />
        <ProtectedRoute exact path="/editAffiliate/:_id" component={AffiliateEdit } />

        <ProtectedRoute exact path="/chats" component={chats} />
        <ProtectedRoute exact path="/chat-with/:userId" component={chatWith} /> 
        <ProtectedRoute exact path="/new-chats" component={NewChats} /> 
        <Route path="/" component={Admin_fr} /> 

        {/* <Route path="/" component={Down} /> */}

        {/* <ProtectedRoute exact path="/admin" component={MainPageContainer } /> */}
        
    </Switch>

    

  </div>
);

export default App;
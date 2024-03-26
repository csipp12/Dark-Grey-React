import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import ProductReco2 from './views/product-reco2'
import MesmosButtonPage from './views/mesmos-button-page'
import ProductSelectedPage from './views/product-selected-page'
import TrendingPage from './views/trending-page'
import LoginPage from './views/login-page'
import ProductReco3 from './views/product-reco3'
import AccountUsername from './views/account-username'
import SavedItemsPage from './views/saved-items-page'
import UserInfo from './views/user-info'
import ProductRecommendationPage from './views/product-recommendation-page'
import ChangePassword from './views/change-password'
import AccountUserSettings from './views/account-user-settings'
import MesmoLoadingScreen from './views/mesmo-loading-screen'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={ProductReco2} exact path="/product-reco2" />
        <Route component={MesmosButtonPage} exact path="/mesmos-button-page" />
        <Route
          component={ProductSelectedPage}
          exact
          path="/product-selected-page"
        />
        <Route component={TrendingPage} exact path="/trending-page" />
        <Route component={LoginPage} exact path="/" />
        <Route component={ProductReco3} exact path="/product-reco3" />
        <Route component={AccountUsername} exact path="/account-username" />
        <Route component={SavedItemsPage} exact path="/saved-items-page" />
        <Route component={UserInfo} exact path="/user-info" />
        <Route
          component={ProductRecommendationPage}
          exact
          path="/product-recommendation-page"
        />
        <Route component={ChangePassword} exact path="/change-password" />
        <Route
          component={AccountUserSettings}
          exact
          path="/account-user-settings"
        />
        <Route
          component={MesmoLoadingScreen}
          exact
          path="/mesmo-loading-screen"
        />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))

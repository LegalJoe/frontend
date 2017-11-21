import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import UserProfile from './containers/userProfile/UserProfile'

import {
  Home,
  SignIn,
  SignUp
} from './containers'

export default class Routes extends Component {
  render() {
    return (
      <div>
       <Route exact path="/"  component={Home} />
       <Route path="/sign-in" component={SignIn} />
       <Route path="/user-profile" component={UserProfile} />
       <Route path="/sign-up" component={SignUp} />
      </div>
    )
  }
}

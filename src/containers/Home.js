import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { replace, push } from 'react-router-redux'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import signIn from '../actions/user/sign-in'
import Header from './Header'
import Examples from './Examples'
import BottomCta from './BottomCta'
import Navigation from '../components/ui/Navigation'
import './Home.css'
import Points from './Points'

const navStyle = {
  backgroundColor: 'transparent',
  position: 'fixed',
  boxShadow: 'none',
}

class Home extends PureComponent {

  componentWillMount() {
    const { replace, signedIn } = this.props
    if (signedIn) replace('/')
  }

  render() {
    return (
      <div>
        <Navigation style={navStyle} />
        <div className="pageContent">
          <Header
            title="AI Powered Legal Contract Analysis."
            subTitle="We help you identify legal risks and problem areas in contracts in a matter of minutes."
          />
          <Points />
          <Examples title="Examples"/>
          <BottomCta title="Upload your contract now"/>
        </div>
      </div>
    )
  }
}

export default Home

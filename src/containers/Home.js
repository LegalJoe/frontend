import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { replace, push } from 'react-router-redux'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import signIn from '../actions/user/sign-in'
import Title from '../components/ui/Title'
import './Home.css'
import Points from './Points'

class Home extends PureComponent {

  componentWillMount() {
    const { replace, signedIn } = this.props
    if (signedIn) replace('/')
  }


  render() {
    return (
      <div className="pageContent">
      <div className="headerContainer">
        <div className="headerText">
          <Title content="AI Powered Legal Contract Analysis."/>
          <h2>We help you identify legal risks and problem areas in contracts in a matter of minutes.</h2>
          <RaisedButton
            label="Upload contract"
            primary={true} />
        </div>
      </div>
          <Points />
      </div>
    )
  }
}

export default Home

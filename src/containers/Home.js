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
        <Header
          title="Contract Analyse"
          subTitle="Ik ben Joe, ik laat je binnen 24 uur weten wat een ZZP contract voor jou betekent.(Ik zorg dat je altijd aan de slag kunt na een opdracht)"
        />
        <Points />
        <Examples title="Examples"/>
        <BottomCta title="Upload your contract now"/>
      </div>
    )
  }
}

export default Home

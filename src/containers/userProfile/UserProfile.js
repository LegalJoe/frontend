import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { replace, push } from 'react-router-redux'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import signIn from '../../actions/user/sign-in'
import Title from '../../components/ui/Title'
import Navigation from '../../components/ui/Navigation'
import ProfileSection from './ProfileSection'
import './UserProfile.css'

const navStyle = {
  position: 'fixed',
}

class UserProfile extends PureComponent {

  componentWillMount() {
    const { replace, signedIn } = this.props
    if (signedIn) replace('/')
  }

  render() {
    return (
      <div>
        <Navigation style={navStyle}/>
        <div className="profileContent">
          <Title content="Profile" />
          <ProfileSection />
        </div>
      </div>
    )
  }
}

export default UserProfile

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
import ContractTable from './ContractTable'
import './UserProfile.css'

const navStyle = {
  position: 'fixed',
  color: '#a81f1f',
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
          <div className="contractContainer">
            <Title content="Your contracts:"/>
            <ContractTable />
          </div>
        </div>
      </div>
    )
  }
}

export default UserProfile

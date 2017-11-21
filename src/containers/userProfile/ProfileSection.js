import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { replace, push } from 'react-router-redux'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Title from '../../components/ui/Title'
import './UserProfile.css'


class ProfileSection extends PureComponent {

  componentWillMount() {
    const { replace, signedIn } = this.props
    if (signedIn) replace('/')
  }

  render() {
    return (
      <div className="profileForm">
        <Title content={this.props.title} className={this.props.titleClass}/>
        <form>
          <div className="input">
            <TextField fullWidth={true} ref="name" type="text" hintText="Name" />
          </div>
          <div className="input">
            <TextField fullWidth={true} ref="email" type="email" hintText="Email address" />
          </div>
          <div className="input">
            <TextField fullWidth={true} ref="contract" type="text" multiLine={true} rows={5} hintText="Copy/Paste your contract in here"  />
          </div>
          <RaisedButton
            label="Save"
            primary={this.props.primary} />
        </form>
      </div>
    )
  }
}

export default ProfileSection

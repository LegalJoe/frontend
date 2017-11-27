import React, { PureComponent } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Title from '../../components/ui/Title'
import './UserProfile.css'

const styles = {
  marginTop: '2rem',
}

class ProfileSection extends PureComponent {
  render() {
    return (
      <div className="profileForm">
        <Title content={this.props.title} className='userProfileForm'/>
        <form>
          <div className="input">
            <TextField fullWidth={true} ref="name" type="text" hintText="Name" />
          </div>
          <div className="input">
            <TextField fullWidth={true} ref="email" type="email" hintText="Email address" />
          </div>
          <RaisedButton
            label="Save"
            style={styles}
            primary={true} />
        </form>
      </div>
    )
  }
}

export default ProfileSection

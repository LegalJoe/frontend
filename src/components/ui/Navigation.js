import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import signOut from '../../actions/user/sign-out'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import FlatButton from 'material-ui/FlatButton'
import MenuItem from 'material-ui/MenuItem'
import IconMenu from 'material-ui/IconMenu'
import Reorder from 'material-ui/svg-icons/action/reorder'
import { palette } from '../../styles/theme'

const TITLE = 'Legal Joe'

const navStyle = {
  position: 'fixed',
  boxShadow: 'none',
  left: '0',
  top: '0',
  color: 'white',
  textShadow:'-1px 0 black, 0 2px black, 1px 0 black, 0 -1px black',
}

const buttonStyle = {
  marginTop: '-5%',
  color: `${palette.alternateTextColor}`,
}

class Navigation extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool.isRequired,
    push: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired,
  }

  signOut = (event) => {
    event.preventDefault()
    this.props.signOut()
    this.props.push('/')
  }

  signUp = () => {
  this.props.push('/sign-up')
  }

  goHome = () => {
    this.props.push('/')
  }

  goToAdmin = () => {
    this.props.push('/admin-tabs')
  }

  goToProfile = () => {
    this.props.push('/user-profile')
  }

  render() {
    const { signedIn } = this.props
    const { currentUser } = this.props

    return (
      <AppBar
        title={TITLE}
        onTitleTouchTap={this.goHome}
        style={navStyle}
        iconElementLeft={<IconButton onClick={this.goHome}></IconButton>}

        iconElementRight={signedIn ?
          <div>
          <FlatButton
          className="buttonName"
          style={buttonStyle}
          onClick={this.goToProfile.bind(this)}
          label={(currentUser === null || this.props.admin === true)? null : `${currentUser.firstName}`}/>
          <IconMenu
            iconButtonElement={
              <IconButton><Reorder /></IconButton>
            }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          >


           {this.props.admin ?
            <MenuItem primaryText="Edit" onClick={this.goToAdmin.bind(this)}/> :
            <MenuItem primaryText="Profiel" onClick={this.goToProfile.bind(this)}/>}
            <MenuItem primaryText="Log uit" onClick={this.signOut.bind(this)}/>

          </IconMenu>           </div>:
        <FlatButton label="Registreer" onClick={this.signUp} />

       }
     />
    )
  }
}

const mapStateToProps = ({ currentUser, admin }) => {
  return {
  currentUser,
  signedIn: (!!currentUser && !!currentUser.id),
  admin: (!!currentUser && !!currentUser.id && !!currentUser.admin)
 }
}

export default connect(mapStateToProps, { push, signOut })(Navigation)

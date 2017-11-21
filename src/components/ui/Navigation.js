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

const TITLE = 'Legal Joe'

const navStyle = {
  backgroundColor: 'transparent',
  position: 'fixed',
  boxShadow: 'none',
  textShadow:'-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
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

  render() {
    const { signedIn } = this.props
    return (
      <AppBar
        title={TITLE}
        style={navStyle}
        iconElementLeft={<IconButton onClick={this.goHome}></IconButton>}
        iconElementRight={signedIn ?
          <IconMenu
            iconButtonElement={
              <IconButton><Reorder /></IconButton>
            }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem primaryText="Profiel" />
            <MenuItem primaryText="Sign out" onClick={this.signOut.bind(this)}/>
          </IconMenu> :
        <FlatButton label="Sign up" onClick={this.signUp} />
       }
     />
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: (!!currentUser && !!currentUser.id)
})

export default connect(mapStateToProps, { push, signOut })(Navigation)

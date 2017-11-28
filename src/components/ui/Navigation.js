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
import Logo from '../../images/legal-joe-green.svg'
import './Navigation.css'
import { fetchTheme } from '../../actions/theme'
import { fetchItems } from '../../actions/items'

const buttonStyle = {
  marginTop: '-5%',
}

class Navigation extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool.isRequired,
    push: PropTypes.func.isRequired,
    signOut: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.fetchTheme()
    this.props.fetchItems()
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
    const userId = this.props.currentUser.id
    this.props.push(`/profile/${userId}`)
  }

  handleScroll = function(event) {
  let color
    if( document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight ){
      color = 'black'
    } else if(window.location.pathname !== ""){ color = 'black'
    } else { color = 'white'}

      this.setState({color})
  }.bind(this)

 componentDidMount= function() {
   window.addEventListener('scroll', this.handleScroll);
 }

 componentWillUnmount = function() {
   window.removeEventListener('scroll', this.handleScroll)
 }


  render() {
    const { signedIn } = this.props
    const { currentUser } = this.props

    return (
      <AppBar
        style=
        {{
          position: 'fixed',
          boxShadow: '0',
          left: '0',
          top: '0',
          color: 'white',
          textShadow:'-1px 0 black, 0 2px black, 1px 0 black, 0 -1px black',
          background: 'none',
        }}
        iconElementLeft={<img src={ Logo } className="logo" alt="hiugijhbjihbv" onClick={this.goHome}/>}

        iconElementRight={signedIn ?
          <div>
          <FlatButton
          className="buttonName"
          style={{buttonStyle,color: '#3acc77'} }

          onClick={this.goToProfile.bind(this)}

          label={(currentUser === null) ? null : `${currentUser.firstName}`}/>

          <IconMenu
            iconButtonElement={
              <IconButton><Reorder /></IconButton>
            }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            iconStyle={this.state}
            menuStyle={{minWidth: '250px', maxWidth: '100%'}}
          >


           {this.props.admin ?
            <MenuItem primaryText="Edit" onClick={this.goToAdmin.bind(this)}/> :
            <MenuItem primaryText="Profiel" onClick={this.goToProfile.bind(this)}/>}
            <MenuItem primaryText="Log uit" onClick={this.signOut.bind(this)}/>

          </IconMenu>           </div>:
        <FlatButton label="Meld je aan" onClick={this.signUp} />

       }
     />
    )
  }
}

const mapStateToProps = ({ currentUser, admin, theme }) => {
  return {
  currentUser,
  signedIn: (!!currentUser && !!currentUser.id),
  admin: (!!currentUser && !!currentUser.id && !!currentUser.admin),
  theme
 }
}


export default connect(mapStateToProps, { push, signOut, fetchTheme, fetchItems })(Navigation)

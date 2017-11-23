import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { replace, push } from 'react-router-redux'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import signIn from '../actions/user/sign-in'
import Title from '../components/ui/Title'
import FlatButton from 'material-ui/FlatButton'
import { palette } from '../styles/theme'
import { fontLibrary } from '../styles/theme'

const { titleColor } = palette
const { fontFamilyTitle } = fontLibrary

const styles = {
  titleStyle: { color: `${titleColor}`, fontFamily:`${ fontFamilyTitle }`},
  dialogStyle: { width: '400px', margin: '100px auto', padding: '2rem'},
  buttonStyle: { float: 'left', marginLeft: '3rem'},
}


export class SignIn extends PureComponent {
  static propTypes = {
    push: PropTypes.func.isRequired,
    signIn: PropTypes.func.isRequired,
    signedIn: PropTypes.bool,
  }

  componentWillMount() {
    const { replace, signedIn } = this.props
    if (signedIn) replace('/')
  }

  submitForm(event) {
    event.preventDefault()
    const user = {
      username: this.refs.username.getValue(),
      password: this.refs.password.getValue(),
    }
    this.props.signIn(user)
  }


  signUp() {
    this.props.push('/sign-up')
  }

  render() {
    return (
      <Paper style={ styles.dialogStyle }>
        <Title content="Sign In" style={ styles.titleStyle } />

        <form onSubmit={this.submitForm.bind(this)}>
          <div className="input">
            <TextField ref="username" type="username" hintText="Username" />
          </div>
          <div className="input">
            <TextField ref="password" type="password" hintText="Password"  />
          </div>
        </form>
        <FlatButton
          onClick={ this.signUp.bind(this) }
          label="Sign up" />
        <RaisedButton
          style={ styles.buttonStyle }
          onClick={ this.submitForm.bind(this) }
          label="Sign in"
          primary={true} />
      </Paper>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: !!currentUser && !!currentUser.id,
})

export default connect(mapStateToProps, { signIn, replace, push })(SignIn)

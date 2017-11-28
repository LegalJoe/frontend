import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import signUp from '../actions/user/sign-up'
import Title from '../components/ui/Title'
import { palette } from '../styles/theme'
import { fontLibrary } from '../styles/theme'

const { titleColor } = palette
const { fontFamilyTitle } = fontLibrary

const styles = {
  titleStyle: { color: `${titleColor}`, fontFamily:`${ fontFamilyTitle }`},
  dialogStyle: { width: '400px', margin: '100px auto', padding: '2rem'},
  buttonStyle: { float: 'right', marginLeft: '3rem'},
}

export class SignUp extends PureComponent {
  static propTypes = {
    push: PropTypes.func.isRequired,
    signUp: PropTypes.func.isRequired,
  }

  state = {}

  submitForm(event) {
    event.preventDefault()
    if (this.validateAll()) {
      const user = {
        firstName: this.refs.firstName.getValue(),
        lastName: this.refs.lastName.getValue(),
        username: this.refs.email.getValue(),
        password: this.refs.password.getValue()
      }
      this.props.signUp(user)
    }
    return false
  }

  signIn() {
    this.props.push('/sign-in')
  }

  validateAll() {
    return this.validateFirstName() &&
      this.validateLastName() &&
      this.validateEmail() &&
      this.validatePassword() &&
      this.validatePasswordConfirmation()
  }

  validateFirstName() {
    const { firstName } = this.refs

    if (firstName.getValue().length > 1) {
      this.setState({
        firstNameError: null
      })
      return true
    }

    this.setState({
      firstNameError: 'Please provide your first name'
    })
    return false
  }

  validateLastName() {
    const { lastName } = this.refs

    if (lastName.getValue().length > 1) {
      this.setState({
        lastNameError: null
      })
      return true
    }

    this.setState({
      lastNameError: 'Please provide your last name'
    })
    return false
  }

  validateEmail() {
    const { email } = this.refs

    if (email.getValue().match(/^[a-z0-9._-]+@[a-z0-9._-]+.[a-z0-9._-]+$/)) {
      this.setState({
        emailError: null
      })
      return true
    }

    if (email.value === '') {
      this.setState({
        emailError: 'Please provide your email address'
      })
      return false
    }

    this.setState({
      emailError: 'Please provide a valid email address'
    })
    return false
  }

  validatePassword() {
    const { password } = this.refs

    if (password.getValue().length < 6) {
      this.setState({
        passwordError: 'Password is too short'
      })
      return false
    }

    if (password.getValue().match(/[a-zA-Z]+/) && password.getValue().match(/[0-9]+/)) {
      this.setState({
        passwordError: null
      })
      return true
    }

    this.setState({
      passwordError: 'Password should contain both letters and numbers'
    })
    return false
  }

  validatePasswordConfirmation() {
    const { password, passwordConfirmation } = this.refs

    if (password.value === passwordConfirmation.value) {
      this.setState({
        passwordConfirmationError: null
      })
      return true
    }

    this.setState({
      passwordConfirmationError: 'Passwords do not match'
    })
    return false
  }

  render() {
    return (
      <Paper style={ styles.dialogStyle }>
        <Title
          content="Sign Up"
          style={{color:this.props.theme.title, fontFamily: this.props.theme.fontTitle}}
        />

        <form onSubmit={this.submitForm.bind(this)}>
          <div className="input">
            <TextField ref="firstName" type="text" hintText="Your first name"
              onChange={this.validateFirstName.bind(this)}
              errorText={ this.state.firstNameError} />
          </div>
          <div className="input">
            <TextField ref="lastName" type="text" hintText="Your last name"
              onChange={this.validateLastName.bind(this)}
              errorText={ this.state.lastNameError} />
          </div>
          <div className="input">
            <TextField ref="email" type="email" hintText="Email address"
              onChange={this.validateEmail.bind(this)}
              errorText={ this.state.emailError} />
          </div>
          <div className="input">
            <TextField ref="password" type="password" hintText="Password"
              onChange={this.validatePassword.bind(this)}
              errorText={ this.state.passwordError} />
          </div>
          <div className="input">
            <TextField ref="passwordConfirmation" type="password" hintText="Repeat Password"
              onKeyUp={this.validatePasswordConfirmation.bind(this)}
              onChange={this.validatePasswordConfirmation.bind(this)}
              errorText={ this.state.passwordConfirmationError} />
          </div>
        </form>
        <FlatButton
          onClick={ this.signIn.bind(this) }
          label="Sign in" />
        <RaisedButton
          style={ styles.buttonStyle }
          labelColor={this.props.theme.subtitle}
          backgroundColor={this.props.theme.primaryTwo}
          onClick={ this.submitForm.bind(this) }
          label="Sign up"
        />
      </Paper>
    )
  }
}

const mapStateToProps = ({ theme }) => ({ theme })

export default connect(mapStateToProps, { signUp, push })(SignUp)

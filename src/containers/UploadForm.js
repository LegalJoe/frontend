import React, { PureComponent } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types'
import { palette } from '../styles/theme'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import UploadFile from './UploadFile'
import './UploadForm.css'


const { errorColor, primary1Color, alternateTextColor, textColor } = palette

const primaryStyles = {
  errorStyle: {
    color: errorColor,
  },
  underlineStyle: {
    borderColor: primary1Color,
  },
  underlineFocusStyle: {
    bordercolor: '#060c36',
  },
  floatingLabelStyle: {
    color: primary1Color,
  },
  inputStyle: {
    color: textColor,
  }
};

const secondaryStyles =
{
  errorStyle: {
    color: errorColor,
  },
  underlineStyle: {
    borderColor: alternateTextColor,
  },
  underlineFocusStyle: {
    bordercolor: alternateTextColor,
  },
  floatingLabelStyle: {
    color: alternateTextColor,
  },
  inputStyle: {
    color: alternateTextColor,
  }
}




class UploadForm extends PureComponent {
  static propTypes = {
    primary: PropTypes.boolean,
    title: PropTypes.string,
  }

  render() {
    const { currentUser } = this.props
    return (
      <div>
        <form>

          <div className="input" >
            <TextField
              ref="name"
              type="text"
              defaultValue={(currentUser === null)? "" : `${currentUser.firstName} ${currentUser.lastName}`}
              floatingLabelText="Name"
              floatingLabelStyle={this.props.primary ? primaryStyles.floatingLabelStyle : secondaryStyles.floatingLabelStyle}
              underlineFocusStyle={this.props.primary ? primaryStyles.underlineFocusStyle : secondaryStyles.underlineFocusStyle}
              inputStyle={this.props.primary ? primaryStyles.inputStyle : secondaryStyles.inputStyle}
            />
          </div>
          <div className="input">
            <TextField
              ref="email"
              type="email"
              defaultValue={(currentUser === null)? "": `${currentUser.email}`}
              hintText="Enter a valid email"
              floatingLabelText="Email"
              floatingLabelStyle={this.props.primary ? primaryStyles.floatingLabelStyle : secondaryStyles.floatingLabelStyle}
              underlineFocusStyle={this.props.primary ? primaryStyles.underlineFocusStyle : secondaryStyles.underlineFocusStyle}
              inputStyle={this.props.primary ? primaryStyles.inputStyle : secondaryStyles.inputStyle}
            />
          </div>
          <div className="input">
            <TextField
              ref="contract"
              type="text"
              multiline={true}
              rows={5}
              hintText="Copy/Paste je contract hier"
              floatingLabelText="Contract"
              floatingLabelFocusStyle={this.props.primary ? primaryStyles.floatingLabelStyle : secondaryStyles.floatingLabelStyle}
              underlineFocusStyle={this.props.primary ? primaryStyles.underlineFocusStyle : secondaryStyles.underlineFocusStyle}
              inputStyle={this.props.primary ? primaryStyles.inputStyle : secondaryStyles.inputStyle}
            />
          </div>
            <UploadFile/>
          <RaisedButton
            label="Start Analyse"
            primary={this.props.primary} />
        </form>

      </div>

    );
  }
}
const mapStateToProps = ({ currentUser, admin }) => {
  return {
  currentUser,
 }
}

export default connect(mapStateToProps, {push})(UploadForm)

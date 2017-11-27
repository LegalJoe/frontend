import React, { PureComponent } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types'
import { palette } from '../styles/theme'
import { fontLibrary } from '../styles/theme'
import { connect } from 'react-redux'
import UploadFile from './UploadFile'
import Toggle from 'react-toggle'
import './ButtonStyle.css'
import { sendContract, uploadFile } from '../actions/contracts/'
var FormData = require('form-data');


const { errorColor, alternateTextColor, textColor } = palette
const { fontFamilyText } = fontLibrary

const styles = {
  paragraph: { color: `${textColor}`, fontFamily: `${fontFamilyText}`, maxWidth: '80%' },
  alternateParagraph: { color: `${alternateTextColor}`, fontFamily: `${fontFamilyText}, maxWidth: '80%'` }
}

const primaryStyles = {
  errorStyle: {
    color: errorColor,
  },
  underlineStyle: {
    borderColor: textColor,
  },
  underlineFocusStyle: {
    bordercolor: textColor,
  },
  floatingLabelStyle: {
    color: textColor,
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
  constructor(props) {
    super(props);
    this.state = {
      switched: false
    };
  }

  toggleSwitch = () => {
   this.setState(prevState => {
     return {
       switched: !prevState.switched
     }
   })
  }

  static propTypes = {
    primary: PropTypes.boolean,
    title: PropTypes.string,
    sendContract: PropTypes.func.isRequired,
  }


  submitForm(event) {
    event.preventDefault()
    const formData = new FormData();
    formData.append("file", this.refs.upFile.state.accepted[0]);
    formData.append("tags", `${this.refs.name.getValue()} , ${this.refs.email.getValue()}, ${this.state.switched}`);
    formData.append("upload_preset", "ljanwgnh"); // Replace the preset name with your own
    formData.append("api_key", "392573642277127"); // Replace API key with your own Cloudinary key
    formData.append("timestamp", (Date.now() / 1000) | 0);

    this.props.uploadFile(formData)
    this.refs.upFile.state.accepted = [];
    this.refs.upFile.forceUpdate()
  }

  render() {
    const { currentUser } = this.props

    return (
      <div className="formStyle">
        <form>
        <div className="textinput">
          <div className="input" >
            <TextField
              ref="name"
              type="text"
              defaultValue={(currentUser === null)? "" : `${currentUser.firstName} ${currentUser.lastName}`}
              floatingLabelText="Name"
              style={this.props.primary ? styles.paragraph : styles.alternateParagraph}
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
              style={this.props.primary ? styles.paragraph : styles.alternateParagraph}
              floatingLabelStyle={this.props.primary ? primaryStyles.floatingLabelStyle : secondaryStyles.floatingLabelStyle}
              underlineFocusStyle={this.props.primary ? primaryStyles.underlineFocusStyle : secondaryStyles.underlineFocusStyle}
              inputStyle={this.props.primary ? primaryStyles.inputStyle : secondaryStyles.inputStyle}
            />
          </div>
        </div>
        <h3 style={this.props.primary ? styles.paragraph : styles.alternateParagraph}>{this.props.items.form.title}</h3>
        <h5 style={this.props.primary ? styles.paragraph : styles.alternateParagraph}>{this.props.items.form.content}</h5>

          <label>
            <Toggle
              defaultChecked={this.state.switched}
              onChange={this.toggleSwitch} />
          </label>

          <h3 style={this.props.primary ? styles.paragraph : styles.alternateParagraph}>{(this.state.switched)?
             `${this.props.items.pay[1]}` : `${this.props.items.pay[0]}`}</h3>
          <UploadFile drawerContent={this.props.items.drawer.content}
            ref="upFile"
          />
          <RaisedButton
            label={ this.props.items.drawer.subtitle}
            onClick={this.submitForm.bind(this)}
            primary={this.props.primary} />
        </form>
      </div>
    );
  }
}
const mapStateToProps = ({ currentUser, admin, items }) => {
  return {
    currentUser,
    items
  }
}

export default connect(mapStateToProps, {sendContract , uploadFile})(UploadForm)

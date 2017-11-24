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
  //switch to file upload:
  const formData = new FormData();
  console.log(this.refs.upFile.state.accepted[0])
  formData.append("file", this.refs.upFile.state.accepted[0]);
  formData.append("tags", `some email`);
  formData.append("upload_preset", "ljanwgnh"); // Replace the preset name with your own
  formData.append("api_key", "392573642277127"); // Replace API key with your own Cloudinary key
  formData.append("timestamp", (Date.now() / 1000) | 0);

  this.props.uploadFile(formData)
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
        <h3 style={this.props.primary ? styles.paragraph : styles.alternateParagraph}>Hoe Veel Kost Het?</h3>
        <h5 style={this.props.primary ? styles.paragraph : styles.alternateParagraph}>Ik doe het gratis als je wilt dat ik je contract toevoeg aan mijn database. Wil je dat niet dan betaal je eenmalig EUR 39,-.</h5>

          <label>
            <Toggle
              defaultChecked={this.state.switched}
              onChange={this.toggleSwitch} />
          </label>

          <h3 style={this.props.primary ? styles.paragraph : styles.alternateParagraph}>{(this.state.switched)? "Je Betaalt Wel" : "Je Betaalt Niets"}</h3>
          <UploadFile
            ref="upFile"
          />
          <RaisedButton
            label="Start Analyse"
            onClick={this.submitForm.bind(this)}
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

export default connect(mapStateToProps, {sendContract , uploadFile})(UploadForm)

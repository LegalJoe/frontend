import React, { PureComponent } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types'
import { palette } from '../styles/theme'
import { connect } from 'react-redux'
import UploadFile from './UploadFile'
import { sendContract } from '../actions/contracts/'
import Toggle from 'react-toggle'
import './ButtonStyle.css'


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
     };
   });
 };

  static propTypes = {
    primary: PropTypes.boolean,
    title: PropTypes.string,
    sendContract: PropTypes.func.isRequired,
  }


  submitForm(event) {
  event.preventDefault()
    const contract = {
      email: this.refs.email.getValue(),
      contract: this.refs.contract.getValue(),
      altcontract: this.refs.upFile.state.accepted[0],
      paid: this.state.switched
    }
    this.props.sendContract(contract)
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

        </div>
        <h3>Hoe Veel Kost Het?</h3>
        <h5>Ik doe het gratis als je wilt dat ik het toevoeg aan mijn database. Wil je dat niet dan betaal je eenmalig EUR 39,-.</h5>

        <label>
          <Toggle
            defaultChecked={this.state.switched}
            onChange={this.toggleSwitch} />
        </label>
        <h4>{(this.state.switched)? "Je Betaalt Wel" : "Je Betaalt Niets"}</h4>
        <UploadFile
        ref="upFile"/>
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

export default connect(mapStateToProps, {sendContract})(UploadForm)

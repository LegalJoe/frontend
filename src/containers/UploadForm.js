import React, { PureComponent } from 'react'
import Title from '../components/ui/Title'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

import './UploadForm.css'


class UploadForm extends PureComponent {
  static propTypes = {
    primary: PropTypes.boolean,
    title: PropTypes.string,
    titleClass: PropTypes.string
  }

  render() {
    const { currentUser } = this.props
    return (
      <div>
        <Title content={this.props.title} className={this.props.titleClass}/>
        <form>
          <div className="input">
            <TextField ref="name" type="text" hintText="Naam" defaultValue={(currentUser === null)? "" : `${currentUser.firstName} ${currentUser.lastName}`}/>
          </div>
          <div className="input">
            <TextField ref="email" type="email" hintText="Email" defaultValue={(currentUser === null)? "": `${currentUser.email}`}/>
          </div>
          <div className="input">
            <TextField ref="contract" type="text" multiLine={true} rows={5} hintText="Copy/Paste je contract hier"  />
          </div>
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

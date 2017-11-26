import React, { PureComponent } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux'
import UploadFile from './UploadFile'
import './AdminUpload.css'
import { uploadContract } from '../actions/contracts/'
var FormData = require('form-data');


class AdminUpload extends PureComponent {

  submitForm(event) {
    event.preventDefault()
    const formData = new FormData();
    formData.append("file", this.refs.upFile.state.accepted[0]);
    formData.append("tags", `${this.props.name} , ${this.props.email}, ${this.props.id}`);
    formData.append("upload_preset", "ljanwgnh"); // Replace the preset name with your own
    formData.append("api_key", "392573642277127"); // Replace API key with your own Cloudinary key
    formData.append("timestamp", (Date.now() / 1000) | 0);

  this.props.uploadContract(formData)
}

  render() {
    return (
      <div >
        <form className="adminUpload">
        <div className="upload">
          <UploadFile drawerContent="Upload"
            ref="upFile"
          />
        </div>
        <div className="send">
          <RaisedButton
            label="Send"
            onClick={this.submitForm.bind(this)}
            primary={this.props.primary}
          />
        </div>
        </form>
      </div>
    );
  }
}


export default connect(null, {uploadContract})(AdminUpload)

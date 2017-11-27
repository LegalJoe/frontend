import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import UploadFile from './UploadFile'
import './AdminUpload.css'
import { uploadContract } from '../actions/contracts/'
import IconButton from 'material-ui/IconButton';
import Upload from 'material-ui/svg-icons/file/cloud-upload';
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
          <IconButton
            onClick={this.submitForm.bind(this)}
            primary={this.props.primary}
          >
            <Upload color={this.props.theme.primaryTwo} hoverColor={this.props.theme.primaryOne}/>
          </IconButton>
        </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ theme }) => ({theme})

export default connect(mapStateToProps, {uploadContract})(AdminUpload)

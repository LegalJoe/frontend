import React, { PureComponent } from 'react'
import Title from '../components/ui/Title'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from './Drawer.js'


export default class UploadForm extends PureComponent {

  render() {
    return (
      <div>
        <Title content="Upload your Contract"/>
        <form>
          <div className="input">
            <TextField ref="name" type="text" hintText="Name" />
          </div>
          <div className="input">
            <TextField ref="email" type="email" hintText="Email address" />
          </div>
          <div className="input">
            <TextField ref="contract" type="text" multiLine={true} rows={5} hintText="Copy/Paste your contract in here"  />
          </div>
          <RaisedButton
            label="Upload"
            primary={true} />
        </form>
      </div>

    );
  }
}

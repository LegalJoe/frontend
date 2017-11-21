import React, { PureComponent } from 'react'
import Title from '../components/ui/Title'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from './Drawer.js'
import PropTypes from 'prop-types'


export default class UploadForm extends PureComponent {
  static propTypes = {
    primary: PropTypes.boolean,
    title: PropTypes.string,
    titleClass: PropTypes.string
  }

  render() {
    return (
      <div>
        <Title content={this.props.title} className={this.props.titleClass}/>
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
            label="Start Analyse"
            primary={this.props.primary} />
        </form>
      </div>

    );
  }
}

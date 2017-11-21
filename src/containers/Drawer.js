import React, { PureComponent } from 'react'
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import UploadForm from './UploadForm'
import {desiredColor} from '../styles/theme'

const drawerStyles = {
  display: 'flex',
  paddingLeft: '40px',
}

export default class DrawerUploadContract extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <RaisedButton
          label="Start Analyse"
          alternateTextColor={true}
          onClick={this.handleToggle}
        />
        <Drawer
          width={400}
          openSecondary={true}
          onRequestChange={(open) => this.setState({open})}
          open={this.state.open}
          containerStyle={drawerStyles}
        >
          <UploadForm title="Upload je contract" titleClass="boom" primary={true}/>
        </Drawer>
      </div>
    );
  }
}

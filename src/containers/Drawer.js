import React, { PureComponent } from 'react'
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import UploadForm from './UploadForm'
import Title from '../components/ui/Title'
import { palette } from '../styles/theme'

const styles = {
  titleHeader: { color: `${palette.primary1Color}`},
}

const drawerStyles = {
  display: 'flex',
  flexDirection: 'column',
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
          <Title content="Upload je contract" style={styles.titleHeader} />
          <UploadForm primary={true}/>
        </Drawer>
      </div>
    );
  }
}

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';
import UploadForm from './UploadForm'
import Title from '../components/ui/Title'

const drawerStyles = {
  display: 'flex',
  flexDirection: 'column',
  paddingLeft: '40px',
}

class DrawerUploadContract extends PureComponent {

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
          docked={false}
          openSecondary={true}
          onRequestChange={(open) => this.setState({open})}
          open={this.state.open}
          containerStyle={drawerStyles}
        >
          <Title
            content="Upload je contract"
            style={{color: this.props.theme.title, fontFamily: this.props.theme.fontTitle}} />
          <UploadForm primary={true}/>
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = ({ theme }) => ({ theme })

export default connect(mapStateToProps)(DrawerUploadContract)

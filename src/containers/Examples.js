import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import DrawerUploadContract from './Drawer'
import UploadForm from './UploadForm'
import Title from '../components/ui/Title'
import exampleContract from '../images/exampleContract.png'
import './Examples.css'

class Header extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
  }
  render() {
    return(
      <div className="exampleContainer">
        <Title content={ this.props.title } className="example"/>
        <div className="exampleImages">
          <img className="exampleImage" src={require("../images/exampleContract.png")} />
          <img className="exampleImage" src={require("../images/exampleContract.png")} />
        </div>
      </div>
    )
  }
}

export default Header

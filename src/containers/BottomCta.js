import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import DrawerUploadContract from './Drawer'
import UploadForm from './UploadForm'
import Title from '../components/ui/Title'
import SubTitle from '../components/ui/SubTitle'
import exampleContract from '../images/exampleContract.png'
import './BottomCta.css'

class BottomCta extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
  }
  render() {
    return(
      <div className="ctaContainer">
        <SubTitle content={ this.props.subTitle } />
        <UploadForm primary={false} />
      </div>
    )
  }
}

export default BottomCta

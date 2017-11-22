import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import UploadForm from './UploadForm'
import SubTitle from '../components/ui/SubTitle'
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
        <UploadForm title="Upload Je Contract" titleClass="bottomCta" primary={false} />
      </div>
    )
  }
}

export default BottomCta

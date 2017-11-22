import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import UploadForm from './UploadForm'
import Title from '../components/ui/Title'
import SubTitle from '../components/ui/SubTitle'
import './BottomCta.css'
import { palette } from '../styles/theme'

const styles = {
    titleHeader: { color: `${palette.alternateTextColor}`, fontFamilyTitle:`${palette.fontFamily}`},
  containerStyle: { background: `${palette.primary1Color}`}
}

class BottomCta extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
  }
  render() {
    return(
      <div style={ styles.containerStyle } className="ctaContainer">
        <Title content="Upload Je Contract" style={styles.titleHeader} />
        <SubTitle content={ this.props.subTitle } />
        <UploadForm  />
      </div>
    )
  }
}

export default BottomCta

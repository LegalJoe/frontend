import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import UploadForm from './UploadForm'
import Title from '../components/ui/Title'
import SubTitle from '../components/ui/SubTitle'
import { palette } from '../styles/theme'
import { fontLibrary } from '../styles/theme'
import './BottomCta.css'

const { fontFamilyTitle } = fontLibrary
const { alternateTitleColor, primary1Color } = palette

const styles = {
  titleStyle: { color: `${ alternateTitleColor }`, fontFamily:`${ fontFamilyTitle }`},
  containerStyle: { background: `${primary1Color}`}
}

class BottomCta extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
  }
  render() {
    return(
      <div style={ styles.containerStyle } className="ctaContainer">
        <Title content="Upload Je Contract" style={styles.titleStyle} />
        <SubTitle content={ this.props.subTitle } />
        <UploadForm  />
      </div>
    )
  }
}

export default BottomCta

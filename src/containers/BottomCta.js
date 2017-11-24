import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import UploadForm from './UploadForm'
import Title from '../components/ui/Title'
import SubTitle from '../components/ui/SubTitle'
import { connect } from 'react-redux'
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
      <div
        style={{ background: this.props.theme.primaryOne }}
        className="ctaContainer"
      >
        <Title content= {this.props.items.drawer.title}
          style={{color:this.props.theme.titleTwo, fontFamily: this.props.theme.fontTitle}}
        />

        <SubTitle
          content={ this.props.subTitle }
          style={{color:this.props.theme.subtitle, fontFamily: this.props.theme.fontSubtitle}}
        />

        <UploadForm  />
      </div>
    )
  }
}

const mapStateToProps = ({ items, theme }) => ({ items, theme })

export default connect(mapStateToProps)(BottomCta)

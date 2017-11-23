import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Title from '../components/ui/Title'
import './Examples.css'
import { palette } from '../styles/theme'
import { fontLibrary } from '../styles/theme'

const { titleColor } = palette
const { fontFamilyTitle } = fontLibrary

const styles = {
  titleStyle: { color: `${ titleColor }`, fontFamily:`${ fontFamilyTitle }`},
}

class Header extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
  }
  render() {
    return(
      <div className="exampleContainer">
        <Title content={ this.props.title } className="example" style={ styles.titleStyle }/>
        <div className="exampleImages">
          <img className="exampleImage" src={require("../images/exampleContract1.png")} alt="exampleContract"/>
          <img className="exampleImage" src={require("../images/exampleContract2.png")} alt="exampleContract" />
        </div>
      </div>
    )
  }
}

export default Header

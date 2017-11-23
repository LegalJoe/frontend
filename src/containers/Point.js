import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { fontLibrary } from '../styles/theme'
import { palette } from '../styles/theme'
import './Point.css'

const { fontFamilyText } = fontLibrary
const { textColor } = palette

const styles = {
  textStyle: { color: `${ textColor }`, fontFamily:`${ fontFamilyText }`},
}

class Point extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }

  render() {
    return(
      <div className='pointContainer'>
        <h3 className='pointTitle'>
          { this.props.title }
        </h3>
        <p className='point' style={ styles.textStyle }>
          { this.props.content }
        </p>
     </div>

    )
  }
}

export default Point

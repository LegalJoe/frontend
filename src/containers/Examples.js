import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Title from '../components/ui/Title'
import './Examples.css'
import { palette } from '../styles/theme'
import { fontLibrary } from '../styles/theme'
import { connect } from 'react-redux'

const { titleColor } = palette
const { fontFamilyTitle } = fontLibrary

const styles = {
  titleStyle: { color: `${ titleColor }`, fontFamily:`${ fontFamilyTitle }`},
}

class Examples extends PureComponent {

  static propTypes = {
    title: PropTypes.string.isRequired,
  }
  render() {
    const { items } = this.props
    return(
      <div className="exampleContainer">

        <Title content={ items.examples.title } className="example" style={ styles.titleStyle }/>

        <div className="exampleImages">
          <img className="exampleImage" src={ items.photos[0]} alt="exampleContract"/>
          <img className="exampleImage" src={ items.photos[1]} alt="exampleContract" />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ items }) => ({ items })

export default connect(mapStateToProps)(Examples)

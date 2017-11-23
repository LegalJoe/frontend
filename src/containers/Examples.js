import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Title from '../components/ui/Title'
import './Examples.css'
import { palette } from '../styles/theme'
import { connect } from 'react-redux'

const styles = {
  titleHeader: { color: `${palette.alternateTextColor}`, fontFamilyTitle:`${palette.fontFamilyTitle}`},
  headerStyle: { backgroundImage: `linear-gradient(-200deg, ${palette.primary1Color} 80%, #F8F8F8 60%)`,}
}


class Examples extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }
  render() {
    const { items } = this.props
    return(
      <div className="exampleContainer">
        <Title content={ items.examples.title } className="example" style={ styles.titleHeader }/>
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

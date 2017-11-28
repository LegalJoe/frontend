import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Title from '../components/ui/Title'
import Point from './Point'
import './Examples.css'
import { connect } from 'react-redux'

class Examples extends PureComponent {

  static propTypes = {
    title: PropTypes.string.isRequired,
  }
  render() {
    const { items } = this.props
    return(
      <div className="exampleContainer">
        <Title content={ items.examples.title } className="example"
          style={{color:this.props.theme.title, fontFamily: this.props.theme.fontTitle}}/>
        <div className="contentContainer">
          <Point content="Ik lees je contracten en onderstreep waar je op moet letten. Als je wilt dat er na de analyse een advocaat naar kijkt kunnen we je koppelen aan een advocaat. (via Legalmatters.com)"/>
        </div>
        <div className="exampleImages">
          <img className="exampleImage1" src={ items.photos[0]} alt={ items.photos[0]}/>
          <img className="exampleImage2" src={ items.photos[1]} alt={ items.photos[1]} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ items, theme }) => ({ items, theme })

export default connect(mapStateToProps)(Examples)

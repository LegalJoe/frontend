import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Title from '../components/ui/Title'
import './Examples.css'

class Header extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
  }
  render() {
    return(
      <div className="exampleContainer">
        <Title content={ this.props.title } className="example"/>
        <div className="exampleImages">
          <img className="exampleImage" src={require("../images/exampleContract.png")} alt="exampleContract"/>
          <img className="exampleImage" src={require("../images/exampleContract.png")} alt="exampleContract" />
        </div>
      </div>
    )
  }
}

export default Header

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Title from '../components/ui/Title'
import './Examples.css'
import { palette } from '../styles/theme'

const styles = {
  titleHeader: { color: `${palette.primary1Color}`},
  headerStyle: { backgroundImage: `linear-gradient(-200deg, ${palette.primary1Color} 80%, #F8F8F8 60%)`,}
}


class Header extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
  }
  render() {
    return(
      <div className="exampleContainer">
        <Title content={ this.props.title } className="example" style={ styles.titleHeader }/>
        <div className="exampleImages">
          <img className="exampleImage" src={require("../images/exampleContract.png")} alt="exampleContract"/>
          <img className="exampleImage" src={require("../images/exampleContract.png")} alt="exampleContract" />
        </div>
      </div>
    )
  }
}

export default Header

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import DrawerUploadContract from './Drawer'
import UploadForm from './UploadForm'
import Title from '../components/ui/Title'


class Header extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
  }
  render() {
    return(
      <div className="headerContainer">
        <div className="headerText">
          <Title content={ this.props.title } className="header"/>
          <h2>{ this.props.subTitle }</h2>
        </div>
        <DrawerUploadContract>
            <UploadForm />
        </DrawerUploadContract>
      </div>
    )
  }
}

export default Header

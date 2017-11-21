import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import DrawerUploadContract from './Drawer'
import UploadForm from './UploadForm'
import Title from '../components/ui/Title'
import SubTitle from '../components/ui/SubTitle'
import './Header.css'


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
          <SubTitle content={ this.props.subTitle } />
          <p className="explanation">Ik zoek afwijkende clausules in jouw contract, zoals concurrentiebedingen, onredelijke aansprakelijkheid & vrijwaringen.</p>
          <hr/>
        </div>
        <br/>
        <DrawerUploadContract>
            <UploadForm />
        </DrawerUploadContract>
      </div>
    )
  }
}

export default Header

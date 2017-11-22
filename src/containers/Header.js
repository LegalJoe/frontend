import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import DrawerUploadContract from './Drawer'
import UploadForm from './UploadForm'
import Title from '../components/ui/Title'
import SubTitle from '../components/ui/SubTitle'
import './Header.css'
import { palette } from '../styles/theme'

const styles = {
  titleHeader: { color: `${palette.alternateTextColor}`, fontFamilyTitle:`${palette.fontFamily}`},
  headerStyle: { backgroundImage: `linear-gradient(-200deg, ${palette.primary1Color} 80%, #F8F8F8 60%)`,}
}

class Header extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
  }
  render() {
    return(
      <div  className="headerContainer" style={styles.headerStyle}>
        <div className="headerText">
          <Title content={ this.props.title } style={styles.titleHeader}/>
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

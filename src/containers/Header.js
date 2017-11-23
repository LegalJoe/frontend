import React, { PureComponent } from 'react'
import DrawerUploadContract from './Drawer'
import UploadForm from './UploadForm'
import Title from '../components/ui/Title'
import SubTitle from '../components/ui/SubTitle'
import './Header.css'
import { palette } from '../styles/theme'
import { connect } from 'react-redux'

const styles = {
  titleHeader: { color: `${palette.alternateTextColor}`, fontFamilyTitle:`${palette.fontFamilyTitle}`},
  headerStyle: { backgroundImage: `linear-gradient(-200deg, ${palette.primary1Color} 80%, #F8F8F8 60%)`,}
}

class Header extends PureComponent {
  render() {
    const { items } = this.props
    return(
      <div  className="headerContainer" style={styles.headerStyle}>
        <div className="headerText">
          <Title content={items.header.title} style={styles.titleHeader}/>
          <SubTitle content={items.header.subtitle} />
            <p className="explanation">{items.header.content}</p>
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

const mapStateToProps = ({ items }) => ({ items })

export default connect(mapStateToProps)(Header)

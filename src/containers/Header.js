import React, { PureComponent } from 'react'
import DrawerUploadContract from './Drawer'
import UploadForm from './UploadForm'
import Title from '../components/ui/Title'
import SubTitle from '../components/ui/SubTitle'
import { palette } from '../styles/theme'
import { fontLibrary } from '../styles/theme'
import { connect } from 'react-redux'

const { fontFamilyTitle, fontFamilySubTitle, fontFamilyText } = fontLibrary
const { alternateTitleColor, alternateSubTitleColor, alternateTextColor, primary1Color } = palette

const styles = {
  titleStyle: { color: `${alternateTitleColor}`, fontFamily:`${fontFamilyTitle}`, fontSize: '4em'},
  subTitleStyle: { color: `${alternateSubTitleColor}`, fontFamily: `${fontFamilySubTitle}`},
  paragraph: { color: `${alternateTextColor}`, fontFamily: `${fontFamilyText}`, fontSize: '120%'},
  headerStyle: { backgroundImage: `linear-gradient(-200deg, ${primary1Color} 80%, #F8F8F8 60%)`,}
}

class Header extends PureComponent {
  render() {
    const { items } = this.props
    return(
      <div  className="headerContainer" style={styles.headerStyle}>
        <div className="headerText">
          <Title content={items.header.title} style={styles.titleStyle}/>
          <SubTitle content={items.header.subtitle} style={styles.subTitleStyle}/>
            <p style={styles.paragraph}>{ items.header.content }</p>
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

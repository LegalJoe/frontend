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
  headerStyle: { backgroundImage: `linear-gradient(-200deg, ${primary1Color} 100%, #F8F8F8 100%)`,}
}

class Header extends PureComponent {
  render() {
    const { items } = this.props
    return(
      <div className="headerContainer" style={{ backgroundImage: `linear-gradient(-200deg, ${this.props.theme.primaryOne} 85%, #f8f8f8 0%)`}}>
        <div className="headerText">
          <Title content={ items.header.title } className="header"
            style={{color:this.props.theme.titleTwo, fontFamily: this.props.theme.fontTitle}}/>

          <SubTitle content={items.header.subtitle} style={{color:this.props.theme.subtitle, fontFamily: this.props.theme.fontSubtitle}}/>
            <p style={{color:this.props.theme.textTwo, fontFamily: this.props.theme.fontText}}>{ items.header.content }</p>
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

const mapStateToProps = ({ items, theme }) => ({ items, theme })

export default connect(mapStateToProps)(Header)

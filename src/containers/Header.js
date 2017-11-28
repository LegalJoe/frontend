import React, { PureComponent } from 'react'
import DrawerUploadContract from './Drawer'
import UploadForm from './UploadForm'
import Title from '../components/ui/Title'
import SubTitle from '../components/ui/SubTitle'
import { connect } from 'react-redux'

class Header extends PureComponent {
  render() {
    const { items } = this.props
    return(
      <div className="overlay" style={{background: `${this.props.theme.primaryOne}`}}>
        <div className="headerContainer" style={{backgroundImage: `url(${items.background})`}}>
          <div className="headerText">
            <Title content={ items.header.title } className="header"
              style={{color:this.props.theme.titleTwo, fontFamily: this.props.theme.fontTitle}}/>

            <SubTitle content={items.header.subtitle} style={{color:this.props.theme.subtitleTwo, fontFamily: this.props.theme.fontSubtitle}}/>
              <p style={{color:this.props.theme.textTwo, fontFamily: this.props.theme.fontText}}>{ items.header.content }</p>
          </div>
          <br/>
          <DrawerUploadContract>
              <UploadForm />
          </DrawerUploadContract>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ items, theme }) => ({ items, theme })

export default connect(mapStateToProps)(Header)

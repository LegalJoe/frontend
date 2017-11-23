import React, { PureComponent } from 'react'
import { palette } from '../styles/theme'
import { fontLibrary } from '../styles/theme'
import {Tabs, Tab} from 'material-ui/Tabs'
import Title from '../components/ui/Title'
import './AdminTabs.css'
import AdminPage from './AdminPage'
import UserProfile from './userProfile/UserProfile'
import Styling from './Styling'
import Card from 'material-ui/Card'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import SignIn from './SignIn'

const { canvasColor, titleColor } = palette
const { fontFamilyTitle } = fontLibrary

const styles = {
  tabStyle: {background: `${canvasColor}`},
  tabContentStyle: {minHeight: `50vh`},
  titleStyle: {color: `${ titleColor }`, fontFamily: `${ fontFamilyTitle}`}
}

class AdminTabs extends PureComponent {
  static propTypes = {
    admin: PropTypes.bool,
  }

  render(){
    if (!this.props.admin) return <SignIn />
    return(
      <div className='AdminTabsContainer'>
        <Title content='Admin page' style={styles.titleStyle} className='AdminTitle'/>
        <Card className='paperStyle' zDepth={1} >
          <Tabs style={styles.tabContentStyle}>
            <Tab label="Edit text" style={ styles.tabStyle } >
              <div>
                <AdminPage />
              </div>
            </Tab>
            <Tab label="Edit style" style={ styles.tabStyle }>
              <div>
                <Styling />
              </div>
            </Tab>
            <Tab label="Contract overview" style={ styles.tabStyle }>
              <div>
                <UserProfile />
              </div>
            </Tab>
          </Tabs>
        </Card>
      </div>
    )}
}

const mapStateToProps = ({ items, currentUser }) => ({
  admin: (!!currentUser && !!currentUser.id && !!currentUser.admin)
})

export default connect(mapStateToProps)(AdminTabs)

import React, { PureComponent } from 'react'
import ContractTable from './ContractTable'
import './UserProfile.css'
import { connect } from 'react-redux'
import BottomCta from '../BottomCta'
import { fetchItems } from '../../actions/items'
import { push } from 'react-router-redux'
import {Tabs, Tab} from 'material-ui/Tabs'
import Card from 'material-ui/Card'
import '../AdminTabs.css'

const styles = {
  tabStyle: {background: `#f8f8f8`, borderRadius: '0', color: '#591c1c'},
  tabContentStyle: {minHeight: `50vh`},
}

class UserProfile extends PureComponent {

  componentWillMount() { this.props.fetchItems() }

  render() {
    const { signedIn, admin } = this.props
    if (!signedIn) return null
    if (!!admin) {this.props.push('/admin-tabs')}
    return (
      <div className='AdminTabsContainer'>
        <Card className='paperStyle' zDepth={1} >
          <Tabs style={styles.tabContentStyle}>
            <Tab label="Contracts overview" style={ styles.tabStyle } >
              <div className="contractTable">
                <ContractTable />
              </div>
            </Tab>
            <Tab label="Upload" style={ styles.tabStyle }>
              <div className="userPageUpload">
                <BottomCta />
              </div>
            </Tab>
          </Tabs>
        </Card>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser, theme }) => ({
  currentUser,
  signedIn: !!currentUser && !!currentUser.id,
  admin: !!currentUser && currentUser.admin === true,
  theme
})

export default connect(mapStateToProps, {fetchItems, push})(UserProfile)

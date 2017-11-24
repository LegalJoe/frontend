import React, { PureComponent } from 'react'
import Title from '../../components/ui/Title'
import Navigation from '../../components/ui/Navigation'
import ContractTable from './ContractTable'
import './UserProfile.css'
import { connect } from 'react-redux'


class UserProfile extends PureComponent {

  render() {
    const { signedIn } = this.props
    if (!signedIn) return null
    return (
      <div>
        <Navigation />
        <div className="profileContent">
          <div className="contractContainer">
            <Title content="Your contracts:"/>
            <ContractTable />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  currentUser,
  signedIn: !!currentUser && !!currentUser.id
})

export default connect(mapStateToProps)(UserProfile)

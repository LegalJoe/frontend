import React, { PureComponent } from 'react'
import Title from '../../components/ui/Title'
import Navigation from '../../components/ui/Navigation'
import ContractTable from './ContractTable'
import './UserProfile.css'


class UserProfile extends PureComponent {

  componentWillMount() {
    const { replace, signedIn } = this.props
    if (signedIn) replace('/')
  }

  render() {
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

export default UserProfile

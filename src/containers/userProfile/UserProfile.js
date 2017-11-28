import React, { PureComponent } from 'react'
import Title from '../../components/ui/Title'
import ContractTable from './ContractTable'
import './UserProfile.css'
import { connect } from 'react-redux'
import UploadForm from '../UploadForm'
import { fetchItems } from '../../actions/items'
import { push } from 'react-router-redux'

class UserProfile extends PureComponent {

  componentWillMount() {
    this.props.fetchItems()

  }

  render() {
    const { signedIn, admin } = this.props
    if (!signedIn) return null
    if (!!admin) {this.props.push('/admin-tabs')}
    return (
      <div className="profilePage">
        <div className="profileContent">
          <div className="contractContainer">
            <Title style={{color: this.props.theme.title, fontFamily: this.props.theme.fontTitle}}
              content="Your contracts:"/>
            <ContractTable />
          </div>
        </div>
        <div className="userUpload">
         <UploadForm />
        </div>
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

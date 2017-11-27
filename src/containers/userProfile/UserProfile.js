import React, { PureComponent } from 'react'
import Title from '../../components/ui/Title'
import ContractTable from './ContractTable'
import './UserProfile.css'
import { connect } from 'react-redux'
import UploadForm from '../UploadForm'
import { fetchItems } from '../../actions/items'

class UserProfile extends PureComponent {

  componentWillMount() {this.props.fetchItems()}

  render() {
    const { signedIn } = this.props
    if (!signedIn) return null
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
  theme
})

export default connect(mapStateToProps, {fetchItems})(UserProfile)

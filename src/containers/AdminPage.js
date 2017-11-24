import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import SignIn from './SignIn'
import PropTypes from 'prop-types'
import EditPoints from './EditPoints'
import EditHeader from './EditHeader'
import EditFooter from './EditFooter'
import EditExamples from './EditExamples'
import EditUploadForm from './EditUploadForm'
import Home from './Home'
import Navigation from '../components/ui/Navigation'
import Footer from '../components/ui/Footer'
import './AdminPage.css'

class AdminPage extends PureComponent {
  static propTypes = {
    admin: PropTypes.bool,
  }

  render () {
    if (!this.props.admin) {return <SignIn />}
    return (
      <div className="adminPage">
        <div className="pageContainer">
          <Navigation />
          <Home />
          <Footer />
        </div>
        <div className="formsContainer">
          <EditHeader />
          <EditPoints />
          <EditExamples />
          <EditUploadForm />
          <EditFooter />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ items, currentUser }) => ({
  admin: (!!currentUser && !!currentUser.id && !!currentUser.admin)
})

export default connect(mapStateToProps)(AdminPage)

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import SignIn from './SignIn'
import PropTypes from 'prop-types'
import Styling from './Styling'
import EditPoints from './EditPoints'
import EditHeader from './EditHeader'
import EditFooter from './EditFooter'
import EditExamples from './EditExamples'

class AdminPage extends PureComponent {
  static propTypes = {
    admin: PropTypes.bool,
  }

  render () {
    if (!this.props.admin) return <SignIn />
    return (
      <div>
        <EditHeader />
        <EditPoints />
        <EditExamples />
        <EditFooter />
      </div>
    )
  }
}

const mapStateToProps = ({ items, currentUser }) => ({
  admin: (!!currentUser && !!currentUser.id && !!currentUser.admin)
})

export default connect(mapStateToProps)(AdminPage)

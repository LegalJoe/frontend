import React, { PureComponent } from 'react'
import Home from './Home'
import { connect } from 'react-redux'
import SignIn from './SignIn'
import PropTypes from 'prop-types'

class AdminPage extends PureComponent {
  static propTypes = {
    admin: PropTypes.bool,
  }

  render () {
    if (!this.props.admin) return <SignIn />
    return (
      <Home />
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  admin: (!!currentUser && !!currentUser.id && !!currentUser.admin)
})

export default connect(mapStateToProps)(AdminPage)

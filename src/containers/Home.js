import React, { PureComponent } from 'react'
import Header from './Header'
import Examples from './Examples'
import BottomCta from './BottomCta'
import './Home.css'
import Points from './Points'
import { fetchTheme } from '../actions/theme'
import { connect } from 'react-redux'

class Home extends PureComponent {

  componentWillMount() {
    const { replace, signedIn } = this.props
    if (signedIn) replace('/')
    this.props.fetchTheme()
  }

  render() {
    return (
      <div className="pageContent">
        <Header />
        <Points />
        <Examples />
        <BottomCta />
      </div>
    )
  }
}


export default connect(null, { fetchTheme})(Home)

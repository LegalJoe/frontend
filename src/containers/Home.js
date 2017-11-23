import React, { PureComponent } from 'react'
import Header from './Header'
import Examples from './Examples'
import BottomCta from './BottomCta'
import './Home.css'
import Points from './Points'

class Home extends PureComponent {

  componentWillMount() {
    const { replace, signedIn } = this.props
    if (signedIn) replace('/')
  }

  render() {
    return (
      <div className="pageContent">
        <Header />
        <Points />
        <Examples />
        <BottomCta title="Upload your contract now"/>
      </div>
    )
  }
}

export default Home

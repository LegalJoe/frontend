import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Footer.css'
import LegalSpeak from '../LegalSpeak'
import SocialMedia from '../SocialMedia'

class Footer extends PureComponent {
  static propTypes = {
    content: PropTypes.string.isRequired,
    email: PropTypes.string,
    className: PropTypes.string,
  }

  render() {
    return(
      <div className="footerContainer">
        <LegalSpeak className="legalities" content="LegalJoe is een initiatief van Edouard Dopper die een voorliefde heeft voor Legal tech in samenwerking met AI applied. Joe is een AI bot."/>
        <SocialMedia/>
      </div>
    )
  }
}

export default Footer

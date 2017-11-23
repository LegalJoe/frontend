import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Footer.css'
import LegalSpeak from '../LegalSpeak'
import SocialMedia from '../SocialMedia'
import { connect } from 'react-redux'

class Footer extends PureComponent {
  static propTypes = {
    content: PropTypes.string.isRequired,
    email: PropTypes.string,
    className: PropTypes.string,
  }

  render() {
    const { items } = this.props
    return(
      <div className="footerContainer">
        <LegalSpeak className="legalities" content={items.footer.content}/>
        <SocialMedia/>
      </div>
    )
  }
}

const mapStateToProps = ({ items }) => ({ items })

export default connect(mapStateToProps)(Footer)

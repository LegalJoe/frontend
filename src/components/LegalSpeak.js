import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './LegalSpeak.css'
class LegalSpeak extends PureComponent {
  static propTypes = {
    content: PropTypes.string.isRequired,
  }

  render() {
    return(
      <div className={ this.props.className }>
        <div className="legaltext">
        { this.props.content }
        </div>
      </div>
    )
  }
}

export default LegalSpeak

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './LegalSpeak.css'

class LegalSpeak extends PureComponent {
  static propTypes = {
    content: PropTypes.string.isRequired,
  }

  render() {
    return(
      <div className={ this.props.className }>
        <div
          className="legaltext"
          style={{color:this.props.theme.canvas, fontFamily: this.props.theme.fontSubtitle}}
        >
        { this.props.content }
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ theme }) => ({ theme })

export default connect(mapStateToProps)(LegalSpeak)

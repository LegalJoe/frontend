import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './SubTitle.css'

class SubTitle extends PureComponent {
  static propTypes = {
    content: PropTypes.string.isRequired,
    level: PropTypes.number,
    className: PropTypes.string,
  }

  render() {
    return(
      <h2 className={ this.props.className }>
        { this.props.content }
      </h2>
    )
  }
}

export default SubTitle

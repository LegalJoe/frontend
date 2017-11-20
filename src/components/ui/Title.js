import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Title.css'

class Title extends PureComponent {
  static propTypes = {
    content: PropTypes.string.isRequired,
    level: PropTypes.number,
    className: PropTypes.string,
  }

  render() {
    return(
      <h1 className={ this.props.className }>
        { this.props.content }
      </h1>
    )
  }
}

export default Title

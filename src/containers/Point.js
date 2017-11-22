import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './Point.css'

class Point extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }
  render() {
    return(
      <div className='pointContainer'>
        <h3 className='pointTitle'>
          { this.props.title }
        </h3>
        <p className='point'>
          { this.props.content }
        </p>
     </div>

    )
  }
}

export default Point

import React, { PureComponent } from 'react'
import './Point.css'

class Point extends PureComponent {

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

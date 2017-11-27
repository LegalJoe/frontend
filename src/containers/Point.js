import React, { PureComponent } from 'react'
import './Point.css'
import { connect } from 'react-redux'

class Point extends PureComponent {

  render() {
    return(
      <div className='pointContainer'>
        <h3 className='pointTitle'>
          { this.props.title }
        </h3>
        <p className='point' style={{color:this.props.theme.textColor, fontFamily: this.props.theme.fontText}} >
          { this.props.content }
        </p>
     </div>

    )
  }
}

const mapStateToProps = ({ theme }) => ({ theme })

export default connect(mapStateToProps)(Point)

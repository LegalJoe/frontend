import React, { PureComponent } from 'react'
import { SocialIcons } from 'react-social-icons';
import { connect } from 'react-redux'

class Linkedin extends PureComponent {
  render() {
    return (
      <div className="SocialIcon">
        <div className="linkedin">
        <SocialIcons urls={[this.props.items.urls[2]]}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ items }) => ({ items })
export default connect(mapStateToProps)(Linkedin)

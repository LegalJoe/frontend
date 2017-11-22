import React, { PureComponent } from 'react'
import { SocialIcons } from 'react-social-icons';
import { connect } from 'react-redux'

class Twitter extends PureComponent {
  render() {
    return (
      <div className="SocialIcon">
        <div className="twitter">
        <SocialIcons urls={[this.props.items.urls[1]]}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ items }) => ({ items })
export default connect(mapStateToProps)(Twitter)

import React, { PureComponent } from 'react'
import { SocialIcons } from 'react-social-icons';
import { connect } from 'react-redux'

class Facebook extends PureComponent {
  render() {
    return (
      <div className="SocialIcon">
        <div className="facebook">
        <SocialIcons urls={[this.props.items.urls[0]]}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ items }) => ({ items })

export default connect(mapStateToProps)(Facebook)

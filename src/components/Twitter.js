import React, { PureComponent } from 'react'
import { SocialIcons } from 'react-social-icons';

var urls = [
  'https://twitter.com/realdonaldtrump'
];


class Twitter extends PureComponent {
  render() {
    return (
      <div className="SocialIcon">
        <div className="twitter">
        <SocialIcons urls={urls}/>
        </div>
      </div>
    );
  }
}

export default Twitter

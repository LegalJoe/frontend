import React, { PureComponent } from 'react'
import { SocialIcons } from 'react-social-icons';

var urls = [
  'https://facebook.com/'
];


class Facebook extends PureComponent {
  render() {
    return (
      <div className="SocialIcon">
        <div className="facebook">
        <SocialIcons urls={urls}/>
        </div>
      </div>
    );
  }
}

export default Facebook

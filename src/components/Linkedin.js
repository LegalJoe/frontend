import React, { PureComponent } from 'react'
import { SocialIcons } from 'react-social-icons';

var urls = [
  'https://www.linkedin.com/in/edouard-dopper-0426856/'
];


class Linkedin extends PureComponent {
  render() {
    return (
      <div className="SocialIcon">
        <div className="linkedin">
        <SocialIcons urls={urls}/>
        </div>
      </div>
    );
  }
}

export default Linkedin

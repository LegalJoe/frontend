import React, { PureComponent } from 'react'
import mui from 'material-ui';
import { SocialIcons } from 'react-social-icons';

var urls = [
  'https://www.linkedin.com/in/edouard-dopper-0426856/',
  'https://twitter.com/realdonaldtrump'
];


class SocialMedia extends PureComponent {
  render() {
    return (
      <div className="SocialIcon">
        <SocialIcons urls={urls} />
      </div>
    );
  }
}

export default SocialMedia

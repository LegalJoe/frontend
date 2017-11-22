import React, { PureComponent } from 'react'
import Facebook from './Facebook'
import Twitter from './Twitter'
import Linkedin from './Linkedin'
import './SocialMedia.css'

class SocialMedia extends PureComponent {
  render() {
    return (
      <div className="SocialIcon">
      <Facebook />
      <Twitter />
      <Linkedin />
      </div>
    );
  }
}

export default SocialMedia

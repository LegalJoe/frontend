import React, { PureComponent } from 'react'
import Dropzone from 'react-dropzone'

class Accept extends PureComponent {
  constructor() {
    super()
    this.state = {
      accepted: [],
      rejected: []
    }
  }

  render() {
    return (
      <section>
        <div className="dropzone">
          <Dropzone
            className="dropflex"
            onDrop={(accepted, rejected) => { this.setState({ accepted, rejected }); }}
          >
            <p className="yoyo">   Of Drop De File Hier</p>
          </Dropzone>
        </div>
      </section>
    );
  }
}

export default Accept

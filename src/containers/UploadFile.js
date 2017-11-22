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
            accept="application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf"
            onDrop={(accepted, rejected) => { this.setState({ accepted, rejected }); }}
          >
            <p className="yoyo">   Of Drop De File Hier</p>
          </Dropzone>
          <aside>
          <h2>Accepted files</h2>
          <ul>
            {
              this.state.accepted.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
            }
          </ul>
          <h2>Rejected files</h2>
          <ul>
            {
              this.state.rejected.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
            }
          </ul>
        </aside>
        </div>
      </section>
    );
  }
}

export default Accept

import React, { PureComponent } from 'react'
import Dropzone from 'react-dropzone'
import { palette } from '../styles/theme'

const { grey30 } = palette

const styles = {
  dropZone: { maxWidth: '80%', backgroundColor: `${grey30}` }
}

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
            style={styles.dropZone}
            className="dropflex"
            accept="application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/pdf"
            onDrop={(accepted, rejected) => { this.setState({ accepted, rejected }); }}
          >
            <p style={{color: this.props.passColor, fontFamily: this.props.passFont, fontSize: '120%'}}>
              {this.props.drawerContent}</p>
          </Dropzone>
          <aside>
            <ul>
              {this.state.accepted.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)}
            </ul>
          </aside>
        </div>
      </section>
    );
  }
}



export default Accept

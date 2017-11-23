import React, { PureComponent } from 'react'
import Dropzone from 'react-dropzone'
import { palette } from '../styles/theme'
import { fontLibrary } from '../styles/theme'

const { fontFamilyText } = fontLibrary
const { TextColor } = palette

const styles = {
  paragraph: { color: `${TextColor}`, fontFamily: `${fontFamilyText}`, fontSize: '120%'},
  dropZone: { maxWidth: '80%' }
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
            <p style={styles.paragraph}>Of Drop De File Hier</p>
          </Dropzone>
          <aside>
          <ul>
            {
              this.state.accepted.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
            }
          </ul>
        </aside>
        </div>
      </section>
    );
  }
}

export default Accept

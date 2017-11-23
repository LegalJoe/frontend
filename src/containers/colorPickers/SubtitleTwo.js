import React, { PureComponent } from 'react'
import SubTitle from '../../components/ui/SubTitle'
import { updateTheme } from '../../actions/theme'
import ColorPicker from 'rc-color-picker'
import FlatButton from 'material-ui/FlatButton'
import 'rc-color-picker/assets/index.css'
import { connect } from 'react-redux'

class SubtitleTwo extends PureComponent {

  changeHandler(color) {
    const { theme } = this.props
    const newTheme = {
      id: theme.id,
      subtitleTwo: color.color,
    }
     this.props.updateTheme(newTheme)
    }


  render() {
    return(
      <div>
        <SubTitle content="Alternate Subtitle Color" />
        <div>
          <ColorPicker
            id='subtitle'
            color={this.props.theme.subtitleTwo}
            onClose={this.changeHandler.bind(this)}
          >
          <FlatButton label="Pick"
            className="react-custom-trigger" />
          </ColorPicker>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({theme}) => ({theme})

export default connect(mapStateToProps, { updateTheme })(SubtitleTwo)

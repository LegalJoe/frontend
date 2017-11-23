import React, { PureComponent } from 'react'
import SubTitle from '../../components/ui/SubTitle'
import { updateTheme } from '../../actions/theme'
import ColorPicker from 'rc-color-picker'
import FlatButton from 'material-ui/FlatButton'
import 'rc-color-picker/assets/index.css'
import { connect } from 'react-redux'

class SubtitleColor extends PureComponent {

  changeHandler(color) {
    const { theme } = this.props
    const newTheme = {
      id: theme.id,
      subtitle: color.color,
    }
     this.props.updateTheme(newTheme)
    }


  render() {
    return(
      <div>
        <SubTitle content="Subtitle Color" />
        <div>
          <ColorPicker
            id='subtitle'
            color={this.props.theme.subtitle}
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

export default connect(mapStateToProps, { updateTheme })(SubtitleColor)

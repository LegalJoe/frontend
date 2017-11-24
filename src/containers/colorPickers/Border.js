import React, { PureComponent } from 'react'
import SubTitle from '../../components/ui/SubTitle'
import { updateTheme } from '../../actions/theme'
import ColorPicker from 'rc-color-picker'
import FlatButton from 'material-ui/FlatButton'
import 'rc-color-picker/assets/index.css'
import { connect } from 'react-redux'

class Border extends PureComponent {

  changeHandler(color) {
    const { theme, name } = this.props

    const newTheme = {
      id: theme.id,
      [name]: color.color,
    }
     this.props.updateTheme(newTheme)
    }


  render() {
    const { name, title } = this.props
    return(
      <div>
        <SubTitle content={title} />
        <div>
          <ColorPicker
            id="border"
            color={this.props.theme[name]}
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

export default connect(mapStateToProps, { updateTheme })(Border)

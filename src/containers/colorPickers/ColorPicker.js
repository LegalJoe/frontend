import React, { PureComponent } from 'react'
import SubTitle from '../../components/ui/SubTitle'
import { updateTheme } from '../../actions/theme'
import ColorPicker from 'rc-color-picker'
import FloatingActionButton from 'material-ui/FlatButton'
import 'rc-color-picker/assets/index.css'
import { connect } from 'react-redux'
import { TableRowColumn } from 'material-ui/Table';

class PickerOfColors extends PureComponent {

  changeHandler(color) {
    const { theme, name } = this.props

    const newTheme = {
      id: theme.id,
      [name]: color.color,
    }
     this.props.updateTheme(newTheme)
    }


  render() {
    const { name } = this.props
    return(
      <TableRowColumn>
          <ColorPicker
            id={ name }
            color={this.props.theme[name]}
            onClose={this.changeHandler.bind(this)}
          >
          <FloatingActionButton mini={true}
            className="react-custom-trigger" />
          </ColorPicker>
      </TableRowColumn>
    )
  }
}

const mapStateToProps = ({theme}) => ({theme})

export default connect(mapStateToProps, { updateTheme })(PickerOfColors)

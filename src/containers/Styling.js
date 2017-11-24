import React, { PureComponent } from 'react'
import SubTitle from '../components/ui/SubTitle'
import { fetchTheme } from '../actions/theme'
import 'rc-color-picker/assets/index.css'
import { connect } from 'react-redux'
import { Primary1Color, Primary2Color, ErrorColor, TitleColor, TitleTwo,
  SubtitleColor, SubtitleTwo, TextColor, TextTwo, Canvas, Border, Disabled,
  FontTitle, FontSubtitle, FontText, PickerOfColors } from './colorPickers'
import Home from './Home'
import Navbar from '../components/ui/Navigation'
import './Styling.css'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

class Styling extends PureComponent {

  componentWillMount() { this.props.fetchTheme()}

  render() {

    const {
      primaryOne,
      primaryTwo,
      error,
      title,
      titleTwo,
      subtitle,
      subtitleTwo,
      textColor,
      textTwo,
      canvas,
      border,
      disabled
    } = this.props.theme

    const colors = [
      {name: "primaryOne",
      color: primaryOne,
      description: "Main color: like navbar, header background etc."},
      {name: "primaryTwo",
      color: primaryTwo,
      description: "Secondary colos: should be complementary to main color"},
      {name: "error", color: error},
      {name: "title", color: title},
      {name: "titleTwo", color: titleTwo},
      {name: "subtitle", color: subtitle},
      {name: "subtitleTwo", color: subtitleTwo },
      {name: "textColor", color: textColor},
      {name: "textTwo", color: textTwo},
      {name: "canvas", color: canvas},
      {name: "border", color: border},
      {name: "disabled", color: disabled}
    ]

    return(
      <div className="contentContainer">
        <div className="webpageContainer">
          <Home />
        </div>
        <div className="stylesContainer">
          <SubTitle
            content="Colors"
            style={{color:this.props.theme.subtitle, fontFamily: this.props.theme.fontSubtitle }}
          />
          <div className="colorContainer">
            <Table>
              <TableHeader
                displaySelectAll={false}
                adjustForCheckbox={false}
                enableSelectAll={false}
              >
                <TableRow>
                  <TableHeaderColumn>ColorType</TableHeaderColumn>
                  <TableHeaderColumn>HEX-value</TableHeaderColumn>
                  <TableHeaderColumn>Pick a Color</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody
                displayRowCheckbox={false}
                showRowHover={true}
                stripedRows={false}
              >
                {colors.map( (color, index) => (
                  <TableRow key={index}>
                    <TableRowColumn>{color.name}</TableRowColumn>
                    <TableRowColumn>{color.color}</TableRowColumn>
                    <PickerOfColors name={color.name} />
                  </TableRow>
                  ))}
              </TableBody>
            </Table>
          </div>

          <div>
            <div>
              <FontTitle />
              <FontSubtitle />
              <FontText />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({theme}) => ({theme})

export default connect(mapStateToProps,{ fetchTheme})(Styling)

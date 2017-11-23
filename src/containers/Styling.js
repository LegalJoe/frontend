import React, { PureComponent } from 'react'
import SubTitle from '../components/ui/SubTitle'
import { fetchTheme } from '../actions/theme'
import 'rc-color-picker/assets/index.css'
import { connect } from 'react-redux'
import { Primary1Color, Primary2Color, ErrorColor, TitleColor, TitleTwo,
  SubtitleColor, SubtitleTwo, TextColor, TextTwo, Canvas, Border, Disabled,
  FontTitle, FontSubtitle, FontText } from './colorPickers'
import './Styling.css'

class Styling extends PureComponent {

  componentWillMount() { this.props.fetchTheme()}

  render() {
    return(
      <div>
        <SubTitle content="Styling" />
        <div className="colorPickers" >
          <div>
            <Primary1Color />
            <Primary2Color />
            <ErrorColor />
            <TitleColor />
          </div>
          <div>
            <TitleTwo />
            <SubtitleColor />
            <SubtitleTwo />
            <TextColor />
          </div>
          <div>
            <TextTwo />
            <Canvas />
            <Border />
            <Disabled />
          </div>
          <div>
            <FontTitle />
            <FontSubtitle />
            <FontText />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({theme}) => ({theme})

export default connect(mapStateToProps,{ fetchTheme})(Styling)

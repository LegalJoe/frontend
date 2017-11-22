import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import SubTitle from '../components/ui/SubTitle'
import './Header.css'
import { palette } from '../styles/theme'
import ColorPicker from 'rc-color-picker'
import FlatButton from 'material-ui/FlatButton'
import 'rc-color-picker/assets/index.css'


const styles = {
  titleHeader: { color: `${palette.textColor}`, fontFamilyTitle:`${palette.fontFamily}`},
}


  function changeHandler(colors) {
    console.log(colors);
  }

class Styling extends PureComponent {

  render() {
    return(
      <div>
        <SubTitle content="Styling" />
        <div style={{ textAlign: 'center' }}>
          <ColorPicker
            id='primaryColor'
            color={'#36c'}
            onChange={changeHandler}
          >
          <FlatButton label="Pick" className="react-custom-trigger" />
          </ColorPicker>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({theme}) => {
  return {
    theme,
  }
}
export default Styling

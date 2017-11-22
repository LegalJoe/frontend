import getMuiTheme from 'material-ui/styles/getMuiTheme'

// Colors

export const red          = '#B72327'

export const amber        = '#FFC107'
export const errorColor   = '#FFC107'

export const darkRed      = '#C1272D'
export const white        = '#ffffff'
export const black        = '#3a3737'
export const darkGrey     = '#757575'
export const grey         = '#DEDEDE'
export const grey50       = 'rgba(222, 222, 222, 0.5)'
export const grey30       = 'rgba(222, 222, 222, 0.7)'


// Palette
export const palette = {
  primary1Color: red,
  primary2Color: amber,
  primary3Color: darkRed,
  accent1Color: amber,
  errorColor: errorColor,
  textColor: black,
  alternateTextColor: white,
  canvasColor: white,
  borderColor: grey,
  disabledColor: grey30,
  fontFamilyTitle: 'helvetica',
}

export default getMuiTheme({ palette })

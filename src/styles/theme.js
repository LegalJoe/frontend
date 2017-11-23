import getMuiTheme from 'material-ui/styles/getMuiTheme'

// Colors

export const red          = '#00796B'
export const amber        = '#FFC107'
export const errorColor   = '#FFC107'
export const darkRed      = '#C1272D'
export const white        = '#FFFFFF'
export const black        = '#3a3737'
export const darkGrey     = '#757575'
export const grey         = '#DEDEDE'
export const grey50       = 'rgba(222, 222, 222, 0.5)'
export const grey30       = 'rgba(222, 222, 222, 0.7)'


// Palette
export const palette = {
  primary1Color: red,
  primary2Color: amber,
  errorColor: errorColor,

  titleColor: red,
  alternateTitleColor: white,

  subTitleColor: red,
  alternateSubTitleColor: grey50,

  textColor: black,
  alternateTextColor: amber,

  canvasColor: white,
  borderColor: grey,
  disabledColor: grey30,

}

export const fontLibrary = {
  fontFamilyTitle: 'monospace',
  fontFamilySubTitle: "monospace",
  fontFamilyText: "monospace",
}

export default getMuiTheme({ palette })

import React, { PureComponent } from 'react'
import { updateTheme } from '../../actions/theme'
import { connect } from 'react-redux'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

const styles = {
  customWidth: {
    width: 300,
  },
}


class FontTitle extends PureComponent {

 state = {}

  handleChange = (event, index, value) => {
    this.setState({value})
    const { theme } = this.props
    event.preventDefault()
    const newTheme = {
      id: theme.id,
      fontTitle: value
    }
    this.props.updateTheme(newTheme)
    console.log(this.state.value)
  }

  render() {
    return(
        <div>
          <h3>Title Font</h3>
          <DropDownMenu
            value={this.props.theme.fontTitle}
            onChange={this.handleChange}
            style={styles.customWidth}
            autoWidth={false}
          >
            <MenuItem value={"‘Montserrat’, sans-serif"}
              primaryText="‘Montserrat’, sans-serif" />
            <MenuItem value={"‘Raleway’, sans-serif"}
              primaryText="‘Raleway’, sans-serif" />
            <MenuItem value={"‘Lato’, sans-serif"}
              primaryText="‘Lato’, sans-serif" />
            <MenuItem value={"‘Roboto Slab’, serif"}
              primaryText="‘Roboto Slab’, serif" />
            <MenuItem value={"‘PT Serif’, serif"}
              primaryText="‘PT Serif’, serif" />
            <MenuItem value={"‘Indie Flower’, cursive"}
              primaryText="‘Indie Flower’, cursive" />
            <MenuItem value={"‘Noto Serif’, serif"}
              primaryText=" ‘Noto Serif’, serif" />
            <MenuItem value={"‘Bitter’, serif"}
              primaryText=" ‘Bitter’, serif" />
            <MenuItem value={"‘Anton’, sans-serif"}
              primaryText="‘Anton’, sans-serif" />
            <MenuItem value={"‘Fjalla One’, sans-serif"}
              primaryText="‘Fjalla One’, sans-serif" />
            <MenuItem value={"‘PT Serif’, serif"}
              primaryText="‘PT Serif’, serif" />
            <MenuItem value={"‘Roboto Mono’, monospace"}
              primaryText="‘Roboto Mono’, monospace" />
            <MenuItem value={"‘Share Tech Mono’, monospace"}
              primaryText="‘Share Tech Mono’, monospace" />
            <MenuItem value={"‘VT323’, monospace"}
              primaryText="‘VT323’, monospace" />
            <MenuItem value={"‘Space Mono’, monospace"}
              primaryText="‘Space Mono’, monospace" />
            <MenuItem value={"‘Source Code Pro’, monospace"}
              primaryText="‘Source Code Pro’, monospace" />
          </DropDownMenu>
        </div>
      )
    }
  }

  const mapStateToProps = ({theme}) => ({theme})

  export default connect(mapStateToProps, { updateTheme })(FontTitle)

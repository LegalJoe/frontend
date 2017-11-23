import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchTheme, updateTheme } from '../actions/theme'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

const dialogStyle = {
  width: '1200px',
  margin: '20px',
  padding: '2rem',
}

const buttonStyle = {
  float: 'right',
  marginLeft: '3rem',
}


class EditTheme extends PureComponent {

  componentWillMount() {
    this.props.fetchTheme()
  }

  submitForm(event) {
    const { theme } = this.props
    event.preventDefault()
    const newTheme = {
      id: theme.id,
      primaryTwo: this.refs.primaryTwo.getValue()
    }
     this.props.updateTheme(newTheme)


    }

     render() {
       const { theme } = this.props
       return (
           <div className="EditFooter">
             <Paper style={ dialogStyle }>
               <form onSubmit={this.submitForm.bind(this)}>

                 <div className="input">
                    <TextField ref="primaryTwo" type="text" defaultValue={theme.primaryTwo}
                     id = "urls1" placeholder={theme.primaryTwo}/>
                 </div>

               </form>
               <RaisedButton
                 style={ buttonStyle }
                 onClick={ this.submitForm.bind(this) }
                 label="Save"
                 primary={true} />
             </Paper>
         </div>
       )
     }
   }


const mapStateToProps = ({theme}) => ({theme})

export default connect(mapStateToProps, { fetchTheme, updateTheme })(EditTheme)

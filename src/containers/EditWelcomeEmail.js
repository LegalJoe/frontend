import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { updateEmail, fetchEmail } from '../actions/email'

class EditWelcomeEmail extends PureComponent {

  componentWillMount() { this.props.fetchEmail() }

  submitForm(event) {
    event.preventDefault()
    const newEmail = {
      id: this.props.email.email1.id,
      subjectOne: this.refs.subjectOne.getValue(),
      textChecked: this.refs.textChecked.getValue()
    }
    this.props.updateEmail(newEmail)
  }

   render() {
     const { email } = this.props
     return (
       <div className="editEmail">
         <h2 className="welcomeEmail"> Edit Welcome Email </h2>
           <div className="email">
             <form onSubmit={this.submitForm.bind(this)}>
               <div className="input">
               <h3>Subject</h3>
                 <TextField ref="subjectOne" type="text" defaultValue={email.email1.subjectOne}
                  id = "subjectOne" placeholder={email.email1.subjectOne}/>
               </div>
                <div className="input">
                <h3>Text</h3>
                  <TextField ref="textChecked" type="text" defaultValue={email.email1.textChecked}
                   id = "textChecked" placeholder={email.email1.textChecked} style={{width: '100%'}}
                   multiLine={true} rows={3}/>
               </div>
             </form>
             <RaisedButton
               className = "save"
               onClick={ this.submitForm.bind(this) }
               label="Save"
               backgroundColor={this.props.theme.primaryTwo}
               labelColor={this.props.theme.subtitle} />
           </div>
       </div>
     )
   }
 }

 const mapStateToProps = ({ email, theme }) => ({ email, theme })

 export default connect(mapStateToProps, { updateEmail, fetchEmail })(EditWelcomeEmail)

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { updateEmail, fetchEmail } from '../actions/email'
import './EditEmails.css'
import EditWelcomeEmail from './EditWelcomeEmail'

class EditEmails extends PureComponent {

  componentWillMount() { this.props.fetchEmail() }

  submitForm(event) {
    event.preventDefault()
    const newEmail = {
      id: this.props.email.email2.id,
      subjectOne: this.refs.subjectOne.getValue(),
      textPaid: this.refs.textPaid.getValue(),
      textFree: this.refs.textFree.getValue(),
      subjectTwo: this.refs.subjectTwo.getValue(),
      textChecked: this.refs.textChecked.getValue()
    }
    this.props.updateEmail(newEmail)
  }

   render() {
     const { email } = this.props
     return (
        <div className="editEmails">
          <form onSubmit={this.submitForm.bind(this)} className="mailForm" >

             <div className="uploadedContract">
               <h2>Uploaded Contract</h2>
               <div className="input">
               <h3>Subject</h3>
                 <TextField ref="subjectOne" type="text" defaultValue={email.email2.subjectOne}
                  id = "subjectOne" placeholder={email.email2.subjectOne}/>
               </div>
               <div className="input">
               <h3>Text for Paid Contracts</h3>
                 <TextField ref="textPaid" type="text" defaultValue={email.email2.textPaid}
                  id = "textPaid" placeholder={email.email2.textPaid} style={{width: '100%'}}
                  multiLine={true} rows={3}/>
              </div>
               <div className="input">
               <h3>Text for Free Contracts</h3>
                 <TextField ref="textFree" type="text" defaultValue={email.email2.textFree}
                  id = "content" placeholder={email.email2.textFree} style={{width: '100%'}}
                  multiLine={true} rows={3}/>
                  <RaisedButton
                    className = "saveEmails"
                    onClick={ this.submitForm.bind(this) }
                    label="Save"
                    backgroundColor={this.props.theme.primaryTwo}
                    labelColor={this.props.theme.subtitle} />
              </div>
              </div>

              <div className="checkedContract">
                <h2>Checked Contract</h2>
                <div className="input">
                <h3>Subject</h3>
                  <TextField ref="subjectTwo" type="text" defaultValue={email.email2.subjectTwo}
                   id = "subjectTwo" placeholder={email.email2.subjectTwo}/>
                </div>
                <div className="input">
                <h3>Text</h3>
                  <TextField ref="textChecked" type="text" defaultValue={email.email2.textChecked}
                   id = "textChecked" placeholder={email.email2.textChecked} style={{width: '100%'}}
                   multiLine={true} rows={3}/>
                   <RaisedButton
                     className = "saveEmails"
                     onClick={ this.submitForm.bind(this) }
                     label="Save"
                     backgroundColor={this.props.theme.primaryTwo}
                     labelColor={this.props.theme.subtitle} />
               </div>
               </div>

             </form>
            <EditWelcomeEmail />
       </div>
     )
   }
 }

 const mapStateToProps = ({ email, theme }) => ({ email, theme })

 export default connect(mapStateToProps, { updateEmail, fetchEmail })(EditEmails)

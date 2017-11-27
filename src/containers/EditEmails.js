import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { updateEmail, fetchEmail } from '../actions/email'
import './EditEmails.css'

class EditEmails extends PureComponent {

  componentWillMount() { this.props.fetchEmail() }

  submitForm(event) {
    event.preventDefault()
    const newEmail = {
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
       <div>

       <div className="editEmails">
         <h2> Edit Automatic Response </h2>
           <div className="emails">
             <form onSubmit={this.submitForm.bind(this)} className="emailForm">
             <div className="uploadedContract">
               <h3>Uploaded Contract</h3>
               <div className="input">
               <h3>Subject</h3>
                 <TextField ref="subjectOne" type="text" defaultValue={email.subjectOne}
                  id = "subjectOne" placeholder={email.subjectOne}/>
               </div>
               <div className="input">
               <h3>Text for Paid Contracts</h3>
                 <TextField ref="textPaid" type="text" defaultValue={email.textPaid}
                  id = "textPaid" placeholder={email.textPaid} style={{width: '100%'}}
                  multiLine={true} rows={3}/>
              </div>
               <div className="input">
               <h3>Text for Free Contracts</h3>
                 <TextField ref="textFree" type="text" defaultValue={email.textFree}
                  id = "content" placeholder={email.textFree} style={{width: '100%'}}
                  multiLine={true} rows={3}/>
              </div>
              </div>
              <div className="checkedContract">
                <h3>Checked Contract</h3>
                <div className="input">
                <h3>Subject</h3>
                  <TextField ref="subjectTwo" type="text" defaultValue={email.subjectTwo}
                   id = "subjectTwo" placeholder={email.subjectTwo}/>
                </div>
                <div className="input">
                <h3>Text</h3>
                  <TextField ref="textChecked" type="text" defaultValue={email.textChecked}
                   id = "textChecked" placeholder={email.textChecked} style={{width: '100%'}}
                   multiLine={true} rows={3}/>
               </div>
               </div>
             </form>
             <RaisedButton
               className = "saveButton"
               onClick={ this.submitForm.bind(this) }
               label="Save"
               primary={true} />
           </div>
       </div>
       </div>
     )
   }
 }

 const mapStateToProps = ({ email }) => ({ email })

 export default connect(mapStateToProps, { updateEmail, fetchEmail })(EditEmails)

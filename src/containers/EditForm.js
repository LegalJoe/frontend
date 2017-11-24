import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { updateItem } from '../actions/items'


class EditForm extends PureComponent {
  static propTypes = {
    updateItem: PropTypes.func.isRequired,
  }

  submitForm(event) {
    const { items } = this.props
    event.preventDefault()
    const newUrls = items.pay
    if (this.refs.urls1.getValue().length > 1 ) {
      newUrls[0] = this.refs.urls1.getValue()
    }
    if (this.refs.urls2.getValue().length > 1 ) {
      newUrls[1] = this.refs.urls2.getValue()
    }
    const item = {
      id: items.form.id,
      title: this.refs.title.getValue(),
      content: this.refs.content.getValue(),
      urls: newUrls
    }
    this.props.updateItem(item)
  }

   render() {
     const { items } = this.props
     return (
         <div className="EditForm">
           <div className="formContainer4">
             <form onSubmit={this.submitForm.bind(this)}>
               <div className="input">
                 <h3>Title</h3>
                 <TextField ref="title" type="text" defaultValue={items.form.title}
                   placeholder={items.form.title} id = "title" />
               </div>
             <div className="input">
               <div className="input">
                 <TextField ref="content" type="text" id="content"
                   style = {{width: '90%'}}
                   defaultValue={items.form.content}
                   placeholder={items.form.content}
                   multiLine
                 />

               <div className="input">
                  <TextField ref="urls1" type="text" defaultValue={items.pay[0]}
                   id = "urls1" placeholder={items.pay[0]} style = {{width: '90%'}}/>
               </div>
               <div className="input">
                  <TextField ref="urls2" type="text" defaultValue={items.pay[1]}
                   id = "urls2" placeholder={items.pay[1]}style = {{width: '90%'}}/>
               </div>
              </div>
             </div>
             </form>
             <RaisedButton
               className="saveButton"
               onClick={ this.submitForm.bind(this) }
               label="Save"
               primary={true} />
           </div>
       </div>
     )
   }
 }

 const mapStateToProps = ({ items }) => ({ items })

 export default connect(mapStateToProps, { updateItem })(EditForm)

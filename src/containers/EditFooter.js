import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { updateItem } from '../actions/items'
import './EditFooter.css'

class EditFooter extends PureComponent {
  static propTypes = {
    updateItem: PropTypes.func.isRequired,
  }

  submitForm(event) {
    const { items } = this.props
    event.preventDefault()
    const newUrls = items.urls
    if (this.refs.urls1.getValue().length > 1 ) {
      newUrls[0] = this.refs.urls1.getValue()
    }
    if (this.refs.urls2.getValue().length > 1 ) {
      newUrls[1] = this.refs.urls2.getValue()
    }
    if (this.refs.urls3.getValue().length > 1 ) {
      newUrls[2] = this.refs.urls3.getValue()
    }
    const item = {
      id: items.footer.id,
      content: this.refs.content.getValue(),
      urls: newUrls
    }
    this.props.updateItem(item)
  }

   render() {
     const { items } = this.props
     return (
         <div className="EditFooter">
           <div className="formContainer4">
             <form onSubmit={this.submitForm.bind(this)}>

               <div className="input">
                 <TextField ref="content" type="text" id="content"
                   style = {{width: '90%'}}
                   defaultValue={items.footer.content}
                   placeholder={items.footer.content}
                   multiLine={true}
                   rows={4}
                 />

               <div className="input">
                  <TextField ref="urls1" type="text" defaultValue={items.urls[0]}
                   id = "urls1" placeholder={items.urls[0]} style = {{width: '90%'}}/>
               </div>
               <div className="input">
                  <TextField ref="urls2" type="text" defaultValue={items.urls[1]}
                   id = "urls2" placeholder={items.urls[1]}style = {{width: '90%'}}/>
               </div>
               <div className="input">
                  <TextField ref="urls3" type="text" defaultValue={items.urls[2]}
                   id = "urls3" placeholder={items.urls[2]}style = {{width: '90%'}}/>
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

 export default connect(mapStateToProps, { updateItem })(EditFooter)

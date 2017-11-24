import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { updateItem} from '../actions/items'
import Header from './Header'
import './EditHeader.css'

class EditPoints extends PureComponent {
  static propTypes = {
    updateItem: PropTypes.func.isRequired,
  }

  submitForm(event) {
    const { items } = this.props
    event.preventDefault()
    const item = {
      id: items.header.id,
      title: this.refs.title.getValue(),
      subtitle: this.refs.subtitle.getValue(),
      content: this.refs.content.getValue(),
    }
    this.props.updateItem(item)
  }

   render() {
     const { items } = this.props
     return (

         <div className="formContainer1">
           <form onSubmit={this.submitForm.bind(this)}>
             <div className="input">
             <h3>Title</h3>
               <TextField
                  style={{width: '90%'}}
                  ref="title"
                  type="text"
                  defaultValue={items.header.title}
                  id = "title"
                  placeholder={items.header.title}
                />
             </div>
             <div className="input">
             <h3>Subtitle</h3>
               <TextField ref="subtitle" type="text" id="subtitle"
                 style={{width: '90%'}}
                 defaultValue={items.header.subtitle}
                 placeholder={items.header.subtitle}
                 multiLine
               />
            </div>
             <div className="input">
             <h3>Paragraph</h3>
               <TextField ref="content" type="text" id="content"
                 style={{width: '90%'}}
                 defaultValue={items.header.content}
                 placeholder={items.header.content}
                 multiLine={true}
                 rows={4}
               />
            </div>
           </form>
           <RaisedButton
             className = "saveButton"
             onClick={ this.submitForm.bind(this) }
             label="Save"
             primary={true}
            />
         </div>

     )
   }
 }

 const mapStateToProps = ({ items }) => ({ items })

 export default connect(mapStateToProps, { updateItem })(EditPoints)

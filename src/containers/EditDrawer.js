import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { updateItem} from '../actions/items'

class EditDrawer extends PureComponent {
  static propTypes = {
    updateItem: PropTypes.func.isRequired,
  }

  submitForm(event) {
    const { items } = this.props
    event.preventDefault()
    const item = {
      id: items.drawer.id,
      title: this.refs.title.getValue(),
      subtitle: this.refs.subtitle.getValue(),
      content: this.refs.content.getValue(),
    }
    this.props.updateItem(item)
  }

   render() {
     const { items } = this.props
     return (
       <div>
       <div className="editHeader">
           <div className="formContainer1">
             <form onSubmit={this.submitForm.bind(this)}>
               <div className="input">
               <h3>Title</h3>
                 <TextField ref="title" type="text" defaultValue={items.drawer.title}
                  id = "title" placeholder={items.drawer.title}/>
               </div>
               <div className="input">
               <h3>Subtitle</h3>
                 <TextField ref="subtitle" type="text" defaultValue={items.drawer.subtitle}
                  id = "subtitle" placeholder={items.drawer.subtitle}/>
              </div>
               <div className="input">
               <h3>Paragraph</h3>
                 <TextField ref="content" type="text" defaultValue={items.drawer.content}
                  id = "content" placeholder={items.drawer.content}/>
              </div>
             </form>
             <RaisedButton
               backgroundColor={this.props.theme.primaryTwo}
               labelColor={this.props.theme.subtitle}
               className = "saveButton"
               onClick={ this.submitForm.bind(this) }
               label="Save"
              />
           </div>
       </div>
       </div>
     )
   }
 }

 const mapStateToProps = ({ items, theme }) => ({ items, theme })

 export default connect(mapStateToProps, { updateItem })(EditDrawer)

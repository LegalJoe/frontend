import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { updateItem } from '../actions/items'
import './EditHeader.css'

class EditPoints extends PureComponent {
  static propTypes = {
    updateItem: PropTypes.func.isRequired,
  }

  submitForm(event) {
    const { items } = this.props
    event.preventDefault()
    var background = []
    if (this.refs.background.getValue().length > 1 ) {
      background.push(this.refs.background.getValue())
    }
    const item = {
      id: items.header.id,
      title: this.refs.title.getValue(),
      subtitle: this.refs.subtitle.getValue(),
      content: this.refs.content.getValue(),
      urls: background
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
                 multiLine={true}
                 rows={3}
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
            <div className="input">
            <h3>Background Photo</h3>
               <TextField ref="background" type="text" defaultValue={items.background}
                id = "background" placeholder={items.background} style = {{width: '90%'}}/>
            </div>
           </form>
           <RaisedButton
             className = "saveButton"
             onClick={ this.submitForm.bind(this) }
             label="Save"
             backgroundColor={this.props.theme.primaryTwo}
             labelColor={this.props.theme.subtitle}
            />
         </div>

     )
   }
 }

 const mapStateToProps = ({ items, theme }) => ({ items, theme })

 export default connect(mapStateToProps, { updateItem })(EditPoints)

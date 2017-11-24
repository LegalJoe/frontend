import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { updateItem, fetchItems } from '../actions/items'
import Point from './Point'
import Title from '../components/ui/Title'
import './EditPoints.css'

class EditPoints extends PureComponent {
  static propTypes = {
    updateItem: PropTypes.func.isRequired,
  }

  componentWillMount() { this.props.fetchItems() }

  submitForm(event) {
    const { items } = this.props
    event.preventDefault()
    const item = {
      id: items.points.id,
      title: this.refs.title.getValue(),
      content: this.refs.content.getValue(),
    }
    this.props.updateItem(item)
    this.props.fetchItems()
  }

   render() {
     const { items } = this.props
      return (
        <div>
          <div className="editor">
           <div className="points">
            <Title className="intro" content={items.points.title} />
              <div className="pointsContainer">
                <Point content={items.points.content} />
              </div>
            </div>
         <div className="formContainer2">
           <form onSubmit={this.submitForm.bind(this)} className="form">
             <div className="input">
             <h3>Title</h3>
             <TextField ref="title" type="text" defaultValue={items.points.title}
               placeholder={items.points.title} id = "title" />
             </div>
             <div className="input">
               <h3>Paragraph</h3>
               <TextField ref="content"
                 type="text"
                 id="content"
                 style = {{width: '100%'}}
                 defaultValue={items.points.content}
                 placeholder={items.points.content}
                 multiLine={true}
                 rows={6}
               />
            </div>
           </form>
           <RaisedButton
             className="saveButton"
             onClick={ this.submitForm.bind(this) }
             label="Save"
             primary={true} />
         </div>
         </div>
        </div>
     )
   }
 }

 const mapStateToProps = ({ items }) => ({ items })

 export default connect(mapStateToProps, { updateItem, fetchItems })(EditPoints)

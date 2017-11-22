import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { replace, push } from 'react-router-redux'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { updateItem, fetchItems } from '../actions/items'
import FlatButton from 'material-ui/FlatButton'
import Point from './Point'
import Title from '../components/ui/Title'

const dialogStyle = {
  width: '400px',
  margin: '50px auto',
  padding: '2rem',
}

const buttonStyle = {
  float: 'left',
  marginLeft: '3rem',
}

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
  }

   render() {
     const { items } = this.props
      return (
        <div className="editor">
          <Title className="intro" content={items.points.title} />
            <div className="pointsContainer">
              <Point content={items.points.content} />
            </div>
       <Paper style={ dialogStyle }>

         <form onSubmit={this.submitForm.bind(this)} className="form">
           <div className="input">
           <TextField ref="title" type="text" defaultValue={items.points.title}
             placeholder={items.points.title} id = "title" />

           </div>
           <div className="input">
             <TextField ref="content" type="text" id="content"
               defaultValue={items.points.content}
               placeholder={items.points.content}
               multiLine={true}
               rows={20}
             />
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

 const mapStateToProps = ({ items }) => ({ items })

 export default connect(mapStateToProps, { updateItem, fetchItems })(EditPoints)

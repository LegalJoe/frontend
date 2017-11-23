import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { updateItem } from '../actions/items'
import './EditExamples.css'
import Examples from './Examples'

const dialogStyle = {
  width: '600px',
  height: '300px',
  marginTop: '150px',
  padding: '2rem',
}

const buttonStyle = {
  float: 'right',
  marginLeft: '3rem',
}

class EditExamples extends PureComponent {
  static propTypes = {
    updateItem: PropTypes.func.isRequired,
  }

  submitForm(event) {
    const { items } = this.props
    event.preventDefault()
    const newUrls = items.photos
    if (this.refs.urls1.getValue().length > 1 ) {
      newUrls[0] = this.refs.urls1.getValue()
    }
    if (this.refs.urls2.getValue().length > 1 ) {
      newUrls[1] = this.refs.urls2.getValue()
    }
    if (this.refs.newLink.getValue().length > 1) {
      newUrls.push(this.refs.newLink.getValue())}
    const item = {
      id: items.examples.id,
      title: this.refs.title.getValue(),
      urls: newUrls
    }
    this.props.updateItem(item)
  }

   render() {
     const { items } = this.props
     return (
         <div className="EditExamples">
         <div className="examples2">
           <Examples />
         </div>
         <div className="exampleForm  ">
           <Paper style={ dialogStyle }>
             <form onSubmit={this.submitForm.bind(this)}>
               <div className="input">
                 <TextField ref="title" type="text" defaultValue={items.examples.title}
                   id = "title" placeholder={items.examples.title}/>
                </div>

               <div className="input">
                  <TextField ref="urls1" type="text" defaultValue={items.photos[0]}
                   id = "urls1" placeholder={items.photos[0]} />
               </div>
               <div className="input">
                  <TextField ref="urls2" type="text" defaultValue={items.photos[1]}
                   id = "urls2" placeholder={items.photos[1]}/>
               </div>
              <div className="input">
                 <TextField ref="newLink" type="text" id = "newLink"
                   placeholder="Add new link" />
             </div>
             </form>
             <RaisedButton
               style={ buttonStyle }
               onClick={ this.submitForm.bind(this) }
               label="Save"
               primary={true} />
           </Paper>
           </div>
       </div>
     )
   }
 }

 const mapStateToProps = ({ items }) => ({ items })

 export default connect(mapStateToProps, { updateItem })(EditExamples)

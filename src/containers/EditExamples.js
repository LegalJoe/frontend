import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { updateItem } from '../actions/items'
import './EditExamples.css'

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
    const item = {
      id: items.examples.id,
      title: this.refs.title.getValue(),
      content: this.refs.content.getValue(),
      urls: newUrls
    }
    this.props.updateItem(item)
  }

   render() {
     const { items } = this.props
     return (
       <div className="examplesContainer">
          <div className="formContainer3">
            <form onSubmit={this.submitForm.bind(this)}>
              <div className="input">
              <h3>Title</h3>
                <TextField
                  style={{width: '90%'}}
                  ref="title"
                  type="text"
                  defaultValue={items.examples.title}
                  id = "title"
                  placeholder={items.examples.title}
                />
                </div>
                <div className="input">
                  <h3>Paragraph</h3>
                  <TextField ref="content"
                    type="text"
                    id="content"
                    style={{width: '90%'}}
                    defaultValue={items.examples.content}
                    placeholder={items.examples.content}
                    multiLine={true}
                    rows={5}
                  />
               </div>
               <div className="input">
               <h3>Image URLs</h3>
                <TextField
                  style={{width: '90%'}}
                  ref="urls1"
                  type="text"
                  defaultValue={items.photos[0]}
                  id = "urls1" placeholder={items.photos[0]}
                />
               </div>
                <div className="input">
                  <TextField
                    style={{width: '90%'}}
                    ref="urls2"
                    type="text"
                    defaultValue={items.photos[1]}
                    id = "urls2"
                    placeholder={items.photos[1]}
                  />
                </div>
             </form>
             <RaisedButton
               className="saveButton"
               onClick={ this.submitForm.bind(this) }
               label="Save"
               backgroundColor={this.props.theme.primaryTwo}
               labelColor={this.props.theme.subtitle} />
           </div>
       </div>
     )
   }
 }

 const mapStateToProps = ({ items, theme }) => ({ items, theme })

 export default connect(mapStateToProps, { updateItem })(EditExamples)

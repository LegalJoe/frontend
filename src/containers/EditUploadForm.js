import React, { PureComponent } from 'react'
import BottomCta from './BottomCta'
import EditForm from './EditForm'
import EditDrawer from './EditDrawer'
import './EditUploadForm.css'

class EditUploadForm extends PureComponent {

  render () {
    return (
      <div className="editForm">
        <div class="bottom">
          <BottomCta />
        </div>
          <EditDrawer />
          <EditForm />
      </div>
    )
  }
}


export default EditUploadForm

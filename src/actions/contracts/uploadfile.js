import axios from 'axios'
import sendContract from './create'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'

export const UPLOAD_FILE = 'UPLOAD_FILE'

export default (formData) => {
  return dispatch => {
    dispatch({ type: APP_LOADING })


  axios.post("https://api.cloudinary.com/v1_1/legaljoecloud/raw/upload", formData, {headers: { "X-Requested-With": "XMLHttpRequest" },})
    .then((result) => {
      dispatch({ type: APP_DONE_LOADING })
      dispatch({ type: LOAD_SUCCESS })

      dispatch(sendContract(result))
    })

    .catch((error) => {
      dispatch({ type: APP_DONE_LOADING })
      dispatch({
        type: LOAD_ERROR,
        payload: error.message
      })
    })
  }
}

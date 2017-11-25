import axios from 'axios'
import updateContract from './update'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'


export const UPLOAD_CONTRACT = 'UPLOAD_CONTRACT'

export default (formData) => {
  return dispatch => {
    dispatch({ type: APP_LOADING })

  axios.post("https://api.cloudinary.com/v1_1/legaljoecloud/raw/upload", formData, {headers: { "X-Requested-With": "XMLHttpRequest" },})
    .then((result) => {
      dispatch({ type: APP_DONE_LOADING })
      dispatch({ type: LOAD_SUCCESS })

      dispatch(updateContract(result))
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

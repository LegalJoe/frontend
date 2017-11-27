import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'
import API from '../../api/client'
import { fetchEmail } from './index'

export const UPDATE_EMAIL = 'UPDATE_EMAIL'

const api = new API()

export default (email) => {
  return dispatch => {
    dispatch({ type: APP_LOADING })

    api.put(`/emails`, email )
      .then((res) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })
        dispatch(fetchEmail())

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

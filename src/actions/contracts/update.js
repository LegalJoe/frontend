import API from '../../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'
import fetchUsers from '../user/fetchUsers'

export const UPDATE_CONTRACT = 'UPDATE_CONTRACT'

const api = new API()

export default (result) => {
  return dispatch => {
    dispatch({ type: APP_LOADING })

  api.put('/admindocs', result)
    .then(() => {
      dispatch({ type: APP_DONE_LOADING })
      dispatch({ type: LOAD_SUCCESS })
      dispatch(fetchUsers())
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

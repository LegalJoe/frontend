import API from '../../api/client'
import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'
import { push } from 'react-router-redux'

export const SEND_CONTRACT = 'SEND_CONTRACT'

const api = new API()

export default (contract) => {
  return dispatch => {
    dispatch({ type: APP_LOADING })
    console.log(contract)


  api.post('/userdocs', contract)
    .then((result) => {
      dispatch({ type: APP_DONE_LOADING })
      dispatch({ type: LOAD_SUCCESS })
      dispatch({
        type: SEND_CONTRACT,
        payload: result.body

      })
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

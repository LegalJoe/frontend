import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'
import API from '../../api/client'
import { push } from 'react-router-redux'
import { fetchItems } from './index'

export const UPDATE_ITEM = 'UPDATE_ITEM'

const api = new API()

export default (item) => {
  return dispatch => {
    dispatch({ type: APP_LOADING })

    api.patch(`/items/${item.id}`, item  )
      .then((res) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })
        dispatch(push('/'))
        dispatch(fetchItems)

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

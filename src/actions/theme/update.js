import {
  APP_LOADING,
  APP_DONE_LOADING,
  LOAD_ERROR,
  LOAD_SUCCESS
} from '../loading'
import API from '../../api/client'
import { fetchTheme } from './index'

export const UPDATE_THEME = 'UPDATE_THEME'

const api = new API()

export default (theme) => {
  return dispatch => {
    dispatch({ type: APP_LOADING })

    api.put(`/themes/${theme.id}`, theme  )
      .then((res) => {
        dispatch({ type: APP_DONE_LOADING })
        dispatch({ type: LOAD_SUCCESS })
        dispatch(fetchTheme())

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

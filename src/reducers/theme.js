import { FETCH_THEME } from '../actions/theme'

export default (state = {}, { type, payload } = {}) => {
  switch(type) {
    case  FETCH_THEME:
      return payload

    default :
      return state
  }
}

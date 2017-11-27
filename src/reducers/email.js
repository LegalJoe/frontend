import { FETCH_EMAIL} from '../actions/email'

export default (state = {}, { type, payload } = {}) => {
  switch(type) {
    case  FETCH_EMAIL:
      return payload

    default :
      return state
  }
}

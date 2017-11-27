import { FETCH_CONTRACTS } from '../actions/user/fetch'
import { FETCH_USERS } from '../actions/user/fetchUsers'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case FETCH_USERS :
    case FETCH_CONTRACTS :
      return payload

    default :
      return state
  }
}

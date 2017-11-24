import { FETCH_CONTRACTS } from '../actions/user/fetch'

export default (state = [], { type, payload } = {}) => {
  switch(type) {

     case FETCH_CONTRACTS :

        return payload

    default :
      return state
  }
}

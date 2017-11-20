import { SEND_CONTRACT } from '../actions/contracts'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case  SEND_CONTRACT:
      return [ ...payload ]

      default :
      return state
    }
  }

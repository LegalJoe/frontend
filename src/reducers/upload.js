import { SEND_CONTRACT } from '../actions/contracts/create'

const initialState = { received : "false" }

export default (state = initialState, { type, payload } = {}) => {
  switch(type) {
    case SEND_CONTRACT :
      return payload

    default :
      return initialState
  }
}

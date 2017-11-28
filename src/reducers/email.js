import { FETCH_EMAIL} from '../actions/email'

const initialState = {
  email1: {},
  email2: {},
}

export default (state = initialState, { type, payload } = {}) => {
  switch(type) {
    case  FETCH_EMAIL:
      return {
        email1: payload.filter(i=>i.textPaid === null)[0],
        email2:payload.filter(i=>i.textPaid !== null)[0]
      }

    default :
      return state
  }
}

import { FETCH_ITEMS } from '../actions/items'

const initialState = {
  points: {}
}
export default (state = initialState, { type, payload } = {}) => {
  switch(type) {
    case  FETCH_ITEMS:
      return {...state,
       points: payload[0]}

    default :
      return state
  }
}

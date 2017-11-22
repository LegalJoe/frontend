import { FETCH_ITEMS } from '../actions/items'

const initialState = {
  points: {},
  header: {},
  footer: {},
  urls: {}
}
export default (state = initialState, { type, payload } = {}) => {
  switch(type) {
    case  FETCH_ITEMS:
      return {...state,
       points: payload.filter(i=>i.name === "points")[0],
       header: payload.filter(i=>i.name === "header")[0],
       footer: payload.filter(i=>i.name === "footer")[0],
       urls: payload.filter(i=>i.name === "footer")[0].urls
     }

    default :
      return state
  }
}

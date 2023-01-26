import * as produceData from '../mockData/produce.json'

const POPULATE = "produce/POPULATE";


const produceReducer = (state = {}, action) => {
  console.log("hi wilson")
  // debugger;
  // Object.freeze(state)

  switch (action.type){
    case POPULATE:
      let retObj = {};
      for (let i = 0; i < action.produce.length; i++) {
        retObj[action.produce[i].id] = action.produce[i]
      }
      return retObj
    default:
      return state;
  }

}

export const populateProduce = produce => {
  console.log("hello joseph")
  return {
    type: POPULATE,
    produce: produceData
  }
}

export default produceReducer;
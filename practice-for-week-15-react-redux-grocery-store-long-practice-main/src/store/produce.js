import * as produceData from '../mockData/produce.json'

const POPULATE = "produce/POPULATE";


const produceReducer = (state = {}, action) => {
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
  console.log(produce)
  return {
    type: POPULATE,
    produce: produceData
  }
}

export default produceReducer;
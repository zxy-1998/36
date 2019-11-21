import {combineReducers} from 'redux'
let num = (state = 1,action)=>{
    switch(action.type){
        case "ADD":
            return state+action.count;
            case 'REDUCE':
                return state-action.count;
                default:
                    return state
    }
}
export default combineReducers({
    num
});
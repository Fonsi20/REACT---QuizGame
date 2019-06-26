
import { combineReducers } from 'redux'
import score from './score'
import counter from './counter'

export default combineReducers({
    score,
    counter
})

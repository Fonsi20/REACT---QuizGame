
import { combineReducers } from 'redux'
import score from './score'
import counter from './counter'
import questions from './questions'

export default combineReducers({
    score,
    counter,
    questions
})

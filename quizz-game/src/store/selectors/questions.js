import {counterSelector} from "./counter";


export const questionsSelector = state => state.questions;

export const getCurrentQuestion = state => {

    let questions = questionsSelector(state);

    return questions.length !== 0 ? questions[counterSelector(state)] : {"_id":"5d10df4f40e4de22ecd8f855","id":"1","question":"The fadfadf is?","anws1":"Red","anws2":"Blue","anws3":"Green","anws4":"Pink","true":"Blue"};
};

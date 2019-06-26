import {QUESTION} from "../reducers/questions";


export const setQuestionsAction = questions => {
    return {
        type: QUESTION,
        payload: {
            questions
        }
    }
};

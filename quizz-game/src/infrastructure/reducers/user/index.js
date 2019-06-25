import * as USER_ACTIONS from 'infrastructure/actions/user';

const initialState = {
  id: Number,
  question: String,
  anws1: String,
  anws2: String,
  anws3: String,
  anws4: String,
  true: String,
  userid: Number,
  email: String,
  score: String
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_ACTIONS.USER_SET: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
};

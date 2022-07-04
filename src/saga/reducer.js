import { combineReducers } from "redux";

const initialState = {
  posts: [],
  post: {},
  loadingPosts: false,
  loadingPostDetails: false,
  error: {
    message: "",
  },
};

const PostReducer = (state = initialState, { payload }) => {
  console.log("reducer throw");

  let newState = { ...state };
  newState = {
    ...newState,
    posts: payload,
  };
  return newState;
};
const rootReducer = combineReducers({
  PostReducer,
});

export default rootReducer;

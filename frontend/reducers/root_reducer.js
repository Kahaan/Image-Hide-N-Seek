import { combineReducers } from "redux";
import { postsReducer } from "./posts_reducer";
import { commentsReducer } from "./comments_reducer";
import { sessionReducer } from "./sessions_reducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  session: sessionReducer
});

export default rootReducer;

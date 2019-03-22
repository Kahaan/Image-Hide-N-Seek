import {
  RECEIVE_POST,
  RECEIVE_POSTS,
  DECRYPT_POST,
  CLEAR_MESSAGE
} from "../actions/post_actions";

import { merge } from "lodash";

export const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts;
    case RECEIVE_POST:
      const newState = { [action.post.id]: action.post };
      return merge({}, state, newState);
    case DECRYPT_POST:
      let message = action.message;
      return merge({}, state, message);
    case CLEAR_MESSAGE:
      message = "";
      return merge({}, state, message);
    default:
      return state;
  }
};

import { RECEIVE_POST, RECEIVE_POSTS } from "../actions/post_actions";

import { merge } from "lodash";

export const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts;
    case RECEIVE_POSTS:
      const newState = { [action.post.id]: action.post };
      return merge({}, state, newState);
    default:
      return state;
  }
};

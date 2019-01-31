import {
  RECEIVE_COMMENT,
  RECEIVE_COMMENTS,
  REMOVE_COMMENT
} from "../actions/comment_actions";
import { merge } from "lodash";

export const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments;
    case RECEIVE_COMMENT:
      const newComment = { [action.comment.id]: action.comment };
      return merge({}, state, newComment);
    case REMOVE_COMMENT:
      const newState = merge({}, state);
      delete newState[action.comment.id];
      return newState;
    default:
      return state;
  }
};

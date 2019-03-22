import * as APIUtil from "../util/posts_util";

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const ENCRYPT_POST = "ENCRYPT_POST";
export const DECRYPT_POST = "DECRYPT_POST";
export const CLEAR_MESSAGE = "CLEAR_MESSAGE";

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const decryptPost = message => ({
  type: DECRYPT_POST,
  message
});

export const clearMessage = () => ({
  type: CLEAR_MESSAGE
});

export const fetchPost = id => dispatch =>
  APIUtil.fetchPost(id).then(post => dispatch(receivePost(post)));

export const fetchPosts = () => dispatch =>
  APIUtil.fetchPosts().then(posts => dispatch(receivePosts(posts)));

export const createPost = post => dispatch =>
  APIUtil.createPost(post).then(post => dispatch(receivePost(post)));

export const encodePost = (secret, id) => dispatch =>
  APIUtil.encryptPost(secret, id).then(post => dispatch(receivePost(post)));

export const decodePost = id => dispatch =>
  APIUtil.decryptPost(id).then(message => dispatch(decryptPost(message)));

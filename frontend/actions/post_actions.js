import * as APIUtil from "../util/posts_util";

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const ENCRYPT_POST = "ENCRYPT_POST";
export const DECRYPT_POST = "DECRYPT_POST";

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const encryptPost = (message, post) => ({
  type: ENCRYPT_POST,
  post,
  message
});

export const decryptPost = message => ({
  type: DECRYPT_POST,
  message
});

export const fetchPost = id => dispatch =>
  APIUtil.fetchPost(id).then(post => dispatch(receivePost(post)));

export const fetchPosts = () => dispatch =>
  APIUtil.fetchPosts().then(posts => dispatch(receivePosts(posts)));

export const encodePost = (message, id) => dispatch =>
  APIUtil.encryptPost(message, id).then(post => dispatch(receivePosts(posts)));

export const decodePost = id => dispatch =>
  APIUtil.decryptPost(id).then(message => dispatch(decryptPost(message)));

export const fetchPosts = () =>
  $.ajax({
    method: "GET",
    url: "/posts"
  });

export const fetchPost = id =>
  $.ajax({
    method: "GET",
    url: `/posts/${id}`
  });

export const createPost = post =>
  $.ajax({
    url: "/posts",
    contentType: false,
    processData: false,
    method: "POST",
    data: post
  });

export const encryptPost = (secret, id) =>
  $.ajax({
    method: "PATCH",
    url: `/posts/${id}/encrypt`,
    data: { secret, id }
  });

export const decryptPost = id =>
  $.ajax({
    method: "GET",
    url: `/posts/${id}/decrypt`
  });

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

export const encryptPost = (message, id) =>
  $.ajax({
    method: "PATCH",
    url: `/posts/${id}/encrypt`,
    message
  });

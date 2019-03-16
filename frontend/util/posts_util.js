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

export const createPost = post => {
  // const fd = new FormData();
  // fd.append("image", post.image);
  // fd.append("user_id", post.user_id);
  // fd.append("body", post.body);
  return $.ajax({
    url: "/posts",
    contentType: false,
    // contentType: "multipart/form-data",
    processData: false,
    method: "POST",
    data: post
  });
};

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

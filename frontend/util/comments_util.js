export const createComment = comment => {
  return $.ajax({
    method: "POST",
    url: "/comments",
    data: comment
  });
};

export const deleteComment = commentId => {
  return $.ajax({
    method: "DELETE",
    url: `comments/${commentId}`
  });
};

export const fetchComments = post_id => {
  return $.ajax({
    method: "GET",
    url: `/posts/${post_id}/comments`
  });
};

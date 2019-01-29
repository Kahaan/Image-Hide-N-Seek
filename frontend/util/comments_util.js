export const createComment = comment => {
  $.ajax({
    method: "POST",
    url: "/comments",
    data: comment
  });
};

export const deleteComment = commentId => {
  $.ajax({
    method: "DELETE",
    url: `comments/${commentId}`
  });
};

export const fetchComments = data => {
  $.ajax({
    method: "GET",
    url: "/comments",
    data
  });
};

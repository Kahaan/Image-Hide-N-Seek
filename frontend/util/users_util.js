export const fetchUser = id =>
  $.ajax({
    method: "GET",
    url: `users/${id}`
  });

// Setup show route for users/:id

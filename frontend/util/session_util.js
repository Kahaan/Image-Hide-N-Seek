export const login = user => (
  $.ajax({
    method: "POST",
    url: "/session",
    data: {user}
  });
)

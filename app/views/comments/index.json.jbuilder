
@comments.each do |comment|
  json.set! comment.id do
    json.id comment.id
    json.body comment.body
    json.user_id comment.user_id
    json.post_id comment.post_id
    json.username comment.user.username
  end
end

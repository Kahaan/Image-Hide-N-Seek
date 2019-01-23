# <h1>Posts#show</h1>
# <p>Find me in app/views/posts/show.html.erb</p>
# <h1><%= @post.id %></h1>
# <h1><%= @post.body %></h1>
# <br>
# <%= image_tag @post.image.url(:medium) %><br>
# <%= link_to "Encode",  encode_image_url(@post) %>
# <%= link_to "Decode",  decrypt_image_url(@post) %><br>
# <br>
#
# <h2>Comments:</h2>
# <% @post.comments.map do |comment| %>
# <li><%= comment.body %></li>
# <% end %>


  json.set! @post.id do
    json.id @post.id
    json.image_url @post.image.url(:medium)
    json.user_id @post.user_id
    json.title @post.title
    json.body @post.body
    json.image_file_name @post.image_file_name
    json.image_content_type @post.image_content_type
    json.image_file_size @post.image_file_size
  end

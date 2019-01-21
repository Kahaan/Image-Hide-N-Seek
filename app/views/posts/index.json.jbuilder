
# Posts#index
#
# <br>
# <br>
#
# <%= link_to 'New Plost', new_post_url %><br>
# <%= link_to 'Profile', users_url(current_user) %><br>
#
# <!-- <% @posts.map do |post| %>
#
#   <div class="post">
#     <h4>Post ID: <%= [post.id](http://post.id/) %></h4>
#     <%= image_tag post.image.url(:medium) %><br>
#     <%= link_to "View image", post %>
#     <%= link_to "Delete", post_url(post), method: :delete %>
#   </div>
#
# <% end %> -->



@posts.map do |post|
  json.set! post.id do
    json.id post.id
    json.image_url post.image.url(:medium)
    json.user_id post.user_id
  end
end

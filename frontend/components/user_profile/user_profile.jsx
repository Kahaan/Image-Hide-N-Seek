{
  /*

import React from "react";
import PostDetail from "../posts/post_detail";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    let currentUser = this.props.currentUser;
    let posts = this.props.posts;
    let currentUserPosts = [];
    let postKeys = Object.keys(posts).filter(key => key != "message");
    for (let key of posts) {
      if (posts[key]["user_id"] === currentUser.id) {
        currentUserPosts.push(key);
      }
    }

    return (
      <div>
        <ul className="post-list">
          {currentUserPosts.map(key => (
            <PostDetail key={key} post={posts[key]} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UserProfile;

*/
}

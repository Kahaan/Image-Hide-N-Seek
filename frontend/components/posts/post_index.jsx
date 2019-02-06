import React from "react";
import PostDetail from "./post_detail";

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const posts = this.props.posts;
    const imageKeys = Object.keys(posts).filter(key => key != "message");
    return (
      <ul className="post-list">
        {imageKeys.map(key => (
          <PostDetail
            key={key}
            post={posts[key]}
            decodePost={this.props.decodePost}
            message={this.props.message}
          />
        ))}
      </ul>
    );
  }
}

export default PostIndex;

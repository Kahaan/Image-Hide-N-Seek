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
    return (
      <ul className="post-list">
        {Object.keys(posts).map(key => (
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

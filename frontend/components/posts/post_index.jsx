import React from "react";
import PostDetail from "./post_detail";

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: "",
      title: "",
      body: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    // Do something
  }

  componentDidMount() {
    this.props.fetchPosts();
  }
  // TODO: When signing in for the first time posts don't render

  render() {
    const posts = this.props.posts;
    const imageKeys = Object.keys(posts).filter(key => key != "message");
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="file" />
          <input type="text" value="" />
          <input type="text" value="" />
          <input type="text" value="" />
          <input type="submit" value="Upload" />
        </form>
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
      </div>
    );
  }
}

export default PostIndex;

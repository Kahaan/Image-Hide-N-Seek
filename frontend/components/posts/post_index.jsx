import React from "react";

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
          <img key={key} src={posts[key].image_url} />
        ))}
      </ul>
    );
  }
}

export default PostIndex;

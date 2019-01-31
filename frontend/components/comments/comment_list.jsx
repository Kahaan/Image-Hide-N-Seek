import React from "react";

class CommentList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const post_id = this.props.post.id;
    console.log(`${this.props.post}`);
    this.props.fetchComments(post_id);
  }

  render() {
    const comments = this.props.comments;
    return (
      <ul>
        <h4>Comments</h4>
        comments
      </ul>
    );
  }
}

export default CommentList;

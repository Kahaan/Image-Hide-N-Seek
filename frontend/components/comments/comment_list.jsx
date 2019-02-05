import React from "react";

class CommentList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const post_id = this.props.post.id;
    this.props.fetchComments(post_id);
  }

  deleteComment(commentId) {
    e.preventDefault();
    this.props.deleteComment(commentId);
  }

  deleteCommentButton(comment) {
    if (this.props.currentUserId === comment.user.id) {
      return (
        <button onClick={() => this.deleteComment(comment.id)}>
          <i className="far fa-trash-alt" />
        </button>
      );
    }
  }

  render() {
    const comments = this.props.comments;
    console.log(comments);
    return (
      <ul>
        <h4>Comments</h4>
        {Object.keys(comments).map(key => (
          <div>
            <li key={key}>{comments[key].body}</li>
          </div>
        ))}
      </ul>
    );
  }
}

export default CommentList;

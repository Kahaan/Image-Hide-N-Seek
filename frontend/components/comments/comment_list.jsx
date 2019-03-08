import React from "react";
import { Link } from "react-router-dom";
import CommentContainer from "../comments/comment_container";

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.deleteComment = this.deleteComment.bind(this);
    this.deleteCommentButton = this.deleteCommentButton.bind(this);
  }

  // TODO: Add clear comments action and check that comments#index method controller doesn't show
  // Check comments from different images don't remain in state and render on wrong post

  // TODO: Comments don't persist anymore :S

  componentDidMount() {
    const post_id = this.props.post.id;
    this.props.fetchComments(post_id);
  }

  componentWillUnmount() {
    this.props.clearComments();
  }

  deleteComment(commentId) {
    event.preventDefault();
    this.props.deleteComment(commentId);
  }

  deleteCommentButton(comment) {
    // if (this.props.currentUserId === comment.user_id) {
    return (
      <button onClick={() => this.deleteComment(comment.id)}>
        <i className="far fa-trash-alt" />
      </button>
    );
    // }
  }

  render() {
    const comments = this.props.comments;
    console.log(comments);
    return (
      <ul className="comment-list">
        <h4>Comments</h4>
        {Object.keys(comments).map(key => (
          <li className="comment-container" key={key}>
            <div className="comment">
              <Link to={`users/${comments[key].user_id}`}>
                {comments[key].username}
              </Link>
              <br />
              <span>{comments[key].body}</span>
              {this.deleteCommentButton(comments[key])}
            </div>
          </li>
        ))}
        <CommentContainer
          className="new-comment-container"
          postId={this.props.post.id}
        />
      </ul>
    );
  }
}

export default CommentList;

import React from "react";
import { Link } from "react-router-dom";
import CommentContainer from "../comments/comment_list_container";

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
    if (this.props.currentUserId === comments[key].user.id) {
      return (
        <button onClick={() => this.deleteComment(comments[key].id)}>
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
          <li key={key}>
            <div>
              <Link to={`users/${comments[key].user_id}`}>
                {comments[key].username}
              </Link>
              <div>{comments[key].body}</div>
            </div>
            {this.deleteCommentButton(comments[key])}
          </li>
        ))}
      </ul>
    );
  }
}

export default CommentList;

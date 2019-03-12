import React from "react";
import { Link, withRouter } from "react-router-dom";

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: null,
      post_id: null,
      body: ""
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    event.preventDefault();
    return event => this.setState({ [field]: event.currentTarget.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const comment = this.state;
    comment.user_id = this.props.userId;
    comment.post_id = this.props.postId;
    comment.username = this.props.currentUser.username;
    console.log("from comment form submit---", comment);
    this.props.createComment({ comment });
    this.setState({ body: "" });
  }

  render() {
    return (
      <li className="new-comment-container">
        <div className="comment">
          <Link to={`users/${this.props.userId}`} className="comment-user">
            {this.props.currentUser.username}
          </Link>
          <form className="comment-body" onSubmit={this.handleSubmit}>
            <input
              className="comment-input-box"
              type="text"
              placeholder="Add new comment"
              value={this.state.body}
              onChange={this.update("body")}
            />
          </form>
        </div>
      </li>
    );
  }
}

export default Comment;

import React from "react";

class CommentList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const post_id = this.props.post.id;
    this.props.fetchComments(post_id);
  }

  render() {
    const comments = this.props.comments;
    console.log(comments);
    return (
      <ul>
        <h4>Comments</h4>
        <button>
          <i class="far fa-trash-alt" />
        </button>
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

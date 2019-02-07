import React from "react";
import Modal from "react-modal";
import style from "./modal_style";
import CommentListContainer from "../comments/comment_list_container";

class PostDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      message: ""
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleDecode = this.handleDecode.bind(this);
  }

  handleDecode() {
    this.props.decodePost(this.props.post.id);
    let message = this.props.message;
    this.setState({ message });
    message = "";
  }

  closeModal() {
    this.setState({ modalOpen: false, message: "" });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  render() {
    return (
      <div>
        <div className="Post">
          <section onClick={this.openModal}>
            <img src={this.props.post.image_url} />
          </section>
          <section>
            <h5>Random caption</h5>
          </section>
        </div>

        <Modal
          contentLabel="Modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={style}
        >
          <img src={this.props.post.image_url} />
          <h4>Message:</h4>
          <button onClick={this.handleDecode}>Decode Image</button>
          <p>{this.state.message}</p>
          <CommentListContainer post={this.props.post} />
          // TODO: When creating a comment for the first time the username // //
          // doesn't render!
        </Modal>
      </div>
    );
  }
}

export default PostDetail;

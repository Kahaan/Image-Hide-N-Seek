import React from "react";
import Modal from "react-modal";
import style from "./modal_style";
import CommentListContainer from "../comments/comment_list_container";

class PostDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: false });
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

          <CommentListContainer post={this.props.post} />
        </Modal>
      </div>
    );
  }
}

export default PostDetail;

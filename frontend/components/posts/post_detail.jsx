import React from "react";
import Modal from "react-modal";
import style from "./modal_style";
import CommentListContainer from "../comments/comment_list_container";
import ReactLoading from "react-loading";

class PostDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      message: "",
      secret: ""
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleDecode = this.handleDecode.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(event) {
    event.preventDefault();
    this.setState({ secret: event.currentTarget.value });
  }

  handleDecode() {
    this.props.decodePost(this.props.post.id);
    // .then(() => {
    //   let message = this.props.message;
    //   this.setState({ message });
    // });
  }

  handleSubmit(event) {
    event.preventDefault();
    const secret = this.state.secret;
    const id = this.props.post.id;
    this.props.encodePost(secret, id);
    this.setState({ secret: "" });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.message !== this.props.message)
      this.setState({ message: this.props.message });
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
          <div className="overlay">
            <section onClick={this.openModal}>
              <img src={this.props.post.image_url} />
            </section>
            <section className="caption">
              <h5>{this.props.post.body}</h5>
            </section>
          </div>
        </div>

        <Modal
          contentLabel="Modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={style}
        >
          <div className="modal-image">
            <img src={this.props.post.image_url} />
          </div>
          <h4>Message:</h4>
          <ReactLoading type={"balls"} color="black" />
          <span>
            <button className="modal-btn decode" onClick={this.handleDecode}>
              Decode
            </button>
          </span>
          <span>
            <button className="modal-btn encode" onClick={this.handleEncode}>
              Encode
            </button>
          </span>
          <form onSubmit={this.handleSubmit}>
            <span id="encode-input">
              <input
                type="textarea"
                placeholder="Add a secret message to encode"
                value={this.state.secret}
                onChange={this.update}
              />
            </span>
            <input type="submit" value="Submit" />
          </form>
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

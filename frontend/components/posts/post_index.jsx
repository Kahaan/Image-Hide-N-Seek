import React from "react";
import Modal from "react-modal";
import PostDetail from "./post_detail";
import style from "./modal_style";

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      user_id: "",
      image: "",
      body: ""
    };
    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateImage = this.updateImage.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  handleSubmit(event) {
    event.preventDefault();
    const post = this.state;
    delete post["modalOpen"];
    post.user_id = this.props.currentUser.id;

    const fd = new FormData();
    fd.append("post[image]", post.image);
    fd.append("post[user_id]", post.user_id);
    fd.append("post[body]", post.body);

    console.log("handleSubmit---", post);
    this.props.createPost(fd);
    this.setState({ body: "", image: "", modalOpen: false });
  }

  updateImage(event) {
    event.preventDefault();
    this.setState({ image: event.target.files[0] });
  }

  updateBody(event) {
    event.preventDefault();
    this.setState({ body: event.currentTarget.value });
  }

  componentDidMount() {
    this.props.fetchPosts();
  }
  // TODO: When signing in for the first time posts don't render

  render() {
    console.log(this.state);
    const posts = this.props.posts;
    const imageKeys = Object.keys(posts).filter(key => key != "message");
    return (
      <div>
        <div className="plusIcon">
          <i onClick={this.openModal} className="fas fa-plus-circle fa-4x" />
        </div>

        <ul className="post-list">
          {imageKeys.map(key => (
            <PostDetail
              key={key}
              post={posts[key]}
              decodePost={this.props.decodePost}
              encodePost={this.props.encodePost}
              message={this.props.message}
              clearMessage={this.props.clearMessage}
            />
          ))}
        </ul>

        <Modal
          contentLabel="Modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={style}
        >
          <p className="imageUploadText">
            You can upload PNG format images and encrypt them with your own
            message!
          </p>
          <form onSubmit={this.handleSubmit}>
            <input type="file" onChange={this.updateImage} />
            <input type="text" onChange={this.updateBody} />
            <input type="submit" value="Upload Post" />
          </form>
        </Modal>
      </div>
    );
  }
}

export default PostIndex;

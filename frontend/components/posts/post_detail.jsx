import React from "react";

class PostDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="Post">
          <section>
            <img src={this.props.post.image_url} />
          </section>
          <section>
            <h5>Random caption</h5>
          </section>
        </div>
      </div>
    );
  }
}

export default PostDetail;

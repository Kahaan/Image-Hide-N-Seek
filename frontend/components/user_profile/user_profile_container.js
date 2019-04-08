import { connect } from "react-redux";
import { fetchPosts } from "../../actions/post_actions";
import UserProfile from "./user_profile";
import { withRouter } from "react-router";

const mapStateToProps = state => ({
  posts: state.posts,
  currentUser: state.session.currentUser
});
const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserProfile)
);

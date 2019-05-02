import React, { Component } from "react";
import PropTypes from "prop-types";
import PostItem from "./PostItem";
import Spinner from "../common/Spinner";

class PostFeed extends Component {
  render() {
    const { posts } = this.props;

    return (
      <div>
        {posts ? (
          posts.map(post => <PostItem key={post._id} post={post} />)
        ) : (
          <Spinner />
        )}
      </div>
    );
  }
}

PostFeed.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostFeed;

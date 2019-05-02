import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentItem from "./CommentItem";
import Spinner from "../common/Spinner";

class CommentFeed extends Component {
  render() {
    const { postId, comments } = this.props;

    return (
      <div>
        {comments ? (
          comments.map(comment => (
            <CommentItem key={comment._id} comment={comment} postId={postId} />
          ))
        ) : (
          <Spinner />
        )}
      </div>
    );
  }
}

CommentFeed.propTypes = {
  comments: PropTypes.array.isRequired,
  postId: PropTypes.string.isRequired
};

export default CommentFeed;

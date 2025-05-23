import { useState } from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import Modal from "./Model";
import classes from "./PostList.module.css";

function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData) {
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onCancel={onStopPosting}
            onAddPost={addPostHandler}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author="Manuel" body="Check out the full course!" />
        <Post author="Nana" body="Aloo lelo, kanda lelo!" />
      </ul>
    </>
  );
}

export default PostList;

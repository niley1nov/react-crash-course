import { useState } from "react";
import PostList from "./components/PostList";
import MainHeader from "./components/MainHeader";
import React from "react";

function App() {
  const [modalIsVisible, setModekIsVisible] = useState(false);

  function hideModalHandler() {
    setModekIsVisible(false);
  }

  function showModalHandler() {
    setModekIsVisible(true);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
      </main>
    </>
  );
}

export default App;

import React from "react";
import "./ReduxCRUD.css";
import DisplayText from "./DisplayPosts";
import PostText from "./PostText";

const ReduxCRUD: React.FC = () => {
  return (
    <main className="main">
      <PostText />
      <DisplayText />
    </main>
  );
};

export default ReduxCRUD;

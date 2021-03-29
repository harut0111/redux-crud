import React from "react";
import "./DisplayPosts.css";
import { useSelector } from "react-redux";
import { selectPosts } from "./reduxCRUDSlice";
import PostCards from "./PostCards";

const DisplayPosts: React.FC = () => {
  const posts = useSelector(selectPosts);

  return (
    <div className="display-posts">
      {posts.map((post) => (
        <PostCards key={post.id} post={post} />
      ))}
    </div>
  );
};

export default DisplayPosts;

import React from "react";
import "./DisplayPosts.css";
import { useAppDispatch } from "../../app/hooks";
import { update } from "./reduxCRUDSlice";
import { remove, postsType } from "../ReduxCRUD/reduxCRUDSlice";

interface PropsType {
  post: postsType;
}

const PostCards: React.FC<PropsType> = ({ post }: PropsType) => {
  const dispatch = useAppDispatch();
  const [isEditMode, setEditMode] = React.useState(false);
  const titleRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  const messageRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const handleOnEditClick = () => {
    setEditMode(true);
    titleRef.current.focus();
  };

  const handleOnOkClick = (id: string) => {
    const title = titleRef.current.value;
    const message = messageRef.current.value;
    dispatch(update({ id, title, message }));
    setEditMode(false);
  };

  return (
    <div key={post.id} className="post-card">
      <div className="post-card-title">
        <input
          type="text"
          name="title"
          defaultValue={post.title}
          ref={titleRef}
          disabled={!isEditMode}
        />
      </div>
      <div className="post-card-message">
        <input
          type="text"
          name="message"
          defaultValue={post.message}
          ref={messageRef}
          disabled={!isEditMode}
        />
      </div>
      <div className="post-card-controller">
        {isEditMode ? (
          <button onClick={() => handleOnOkClick(post.id)}>Ok</button>
        ) : (
          <button onClick={handleOnEditClick}>Edit</button>
        )}
        <button onClick={() => dispatch(remove(post.id))}>Remove</button>
      </div>
    </div>
  );
};

export default PostCards;

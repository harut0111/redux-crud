import React from "react";
import "./PostText.css";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch } from "../../app/hooks";
import { post } from "../ReduxCRUD/reduxCRUDSlice";

const PostText: React.FC = () => {
  const [title, setTitle] = React.useState("");
  const [message, setMessage] = React.useState("");

  const dispatch = useAppDispatch();

  const handleOnSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(post({ title, message, id: uuidv4() }));
    setTitle("");
    setMessage("");
  };

  return (
    <div className="post-text">
      <form onSubmit={handleOnSubmit}>
        <label>
          Post:
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <textarea
          name="message"
          rows={10}
          cols={10}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default PostText;

import React, { useContext, useState } from "react";
import {
  Container,
  CreateButton,
  Label,
  PostContentInput,
  PostTitleInput,
  TitleCreatePost,
} from "./createPostStyles";
import { GlobalContext } from "../../contexts/GlobalContext";

const CreatePost = () => {
  const context = useContext(GlobalContext);
  const { createPost, username } = context;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <Container>
      <TitleCreatePost>What's on your mind?</TitleCreatePost>
      <Label>Title</Label>
      <PostTitleInput
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <Label>Content</Label>
      <PostContentInput
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <CreateButton
        onClick={() => {
          createPost(username, title, content);
          setTitle("");
          setContent("");
        }}
      >
        Create
      </CreateButton>
    </Container>
  );
};

export default CreatePost;

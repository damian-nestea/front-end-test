import React from "react";
import {
  Container,
  CreateButton,
  Label,
  PostContentInput,
  PostTitleInput,
  TitleCreatePost,
} from "./createPostStyles";

const CreatePost = () => {
  return (
    <Container>
      <TitleCreatePost>What's on your mind?</TitleCreatePost>
      <Label>Title</Label>
      <PostTitleInput />
      <Label>Content</Label>
      <PostContentInput />
      <CreateButton>Entrar</CreateButton>
    </Container>
  );
};

export default CreatePost;

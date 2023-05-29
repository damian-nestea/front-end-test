import React from "react";
import {
  MainContainer,
  PostContainer,
  TitleContainer,
  Title,
  RemoveAndEditIcons,
  Icon,
} from "./postStyles";
import removeIcon from "../../assets/removeIcon.png";

const Post = () => {
  return (
    <MainContainer>
      <TitleContainer>
        <Title>My First Post at CodeLeap Network!</Title>
        <RemoveAndEditIcons>
          <Icon src={removeIcon} />
        </RemoveAndEditIcons>
      </TitleContainer>
      <PostContainer>ndbasnda</PostContainer>
    </MainContainer>
  );
};

export default Post;

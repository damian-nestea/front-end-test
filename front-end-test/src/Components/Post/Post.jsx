import React, { useContext } from "react";
import {
  MainContainer,
  PostContainer,
  TitleContainer,
  Title,
  RemoveAndEditIcons,
  Icon,
  PostInfo,
  UserPost,
  PostTime,
  Content,
} from "./postStyles";
import removeIcon from "../../assets/removeIcon.png";
import editIcon from "../../assets/editIcon.png";
import { GlobalContext } from "../../contexts/GlobalContext";

const Post = ({ post }) => {
  const context = useContext(GlobalContext);
  const { setOpenRemoveModal, setOpenEditModal } = context;

  const today = new Date();
  const postDate = new Date(post.created_datetime)
  console.log(postDate - today)
  return (
    <MainContainer>
      <TitleContainer>
        <Title>{post.title}</Title>
        <RemoveAndEditIcons>
          <Icon src={removeIcon} onClick={() => setOpenRemoveModal(true)} />
          <Icon src={editIcon} onClick={() => setOpenEditModal(true)} />
        </RemoveAndEditIcons>
      </TitleContainer>
      <PostContainer>
        <PostInfo>
          <UserPost>{post.username}</UserPost>
          <PostTime>{post.created_datetime}</PostTime>
        </PostInfo>
        <Content>{post.content}</Content>
      </PostContainer>
    </MainContainer>
  );
};

export default Post;

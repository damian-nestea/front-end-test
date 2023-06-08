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
import moment from "moment/moment";

const Post = ({ post }) => {
  const context = useContext(GlobalContext);
  const { setOpenRemoveModal, setOpenEditModal, username } = context;

  const postDate = new Date(post.created_datetime);
  const postTimeAgo = moment.utc(postDate).local().startOf("seconds").fromNow();

  return (
    <MainContainer>
      <TitleContainer>
        <Title>{post.title}</Title>
        {username === post.username && (
          <RemoveAndEditIcons>
            <Icon src={removeIcon} onClick={() => setOpenRemoveModal(true)} />
            <Icon src={editIcon} onClick={() => setOpenEditModal(true)} />
          </RemoveAndEditIcons>
        )}
      </TitleContainer>
      <PostContainer>
        <PostInfo>
          <UserPost>{post.username}</UserPost>
          <PostTime>{postTimeAgo}</PostTime>
        </PostInfo>
        <Content>{post.content}</Content>
      </PostContainer>
    </MainContainer>
  );
};

export default Post;

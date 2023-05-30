import React from "react";
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

const Post = () => {
  return (
    <MainContainer>
      <TitleContainer>
        <Title>My First Post at CodeLeap Network!</Title>
        <RemoveAndEditIcons>
          <Icon src={removeIcon} />
          <Icon src={editIcon} />
        </RemoveAndEditIcons>
      </TitleContainer>
      <PostContainer>
        <PostInfo>
          <UserPost>@Damian</UserPost>
          <PostTime>25 minutes ago</PostTime>
        </PostInfo>
        <Content>
          Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum
          elit. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula
          mattis placerat. Duis vel nibh at velit scelerisque suscipit. Duis
          lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus
          feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis
          lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
        </Content>
      </PostContainer>
    </MainContainer>
  );
};

export default Post;

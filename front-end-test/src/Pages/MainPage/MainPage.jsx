import React from "react";
import {
  PageBackground,
  MainContainer,
  Header,
  TitleHeader,
} from "./mainPageStyles";
import CreatePost from "../../Components/CreatePost/CreatePost";
import Post from "../../Components/Post/Post";
import RemoveModal from "../../Components/RemoveModal/RemoveModal";
import EditModal from "../../Components/EditModal/EditModal";

const MainPage = () => {
  return (
    <PageBackground>
      <Header>
        <TitleHeader>CodeLeap Network</TitleHeader>
      </Header>
      <MainContainer>
        <CreatePost />
        <Post />
        <Post />
      </MainContainer>
      <RemoveModal />
      <EditModal />
    </PageBackground>
  );
};

export default MainPage;

import React from "react";
import {
  PageBackground,
  MainContainer,
  Header,
  TitleHeader,
} from "./mainPageStyles";
import CreatePost from "../../Components/CreatePost/CreatePost";
import Post from "../../Components/Post/Post";

const MainPage = () => {
  return (
    <PageBackground>
      <Header>
        <TitleHeader>CodeLeap Network</TitleHeader>
      </Header>
      <MainContainer>
        <CreatePost />
        <Post />
      </MainContainer>
    </PageBackground>
  );
};

export default MainPage;

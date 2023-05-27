import React from "react";
import {
  PageBackground,
  MainContainer,
  Header,
  TitleHeader,
} from "./mainPageStyles";
import CreatePost from "../../Components/CreatePost/CreatePost";

const MainPage = () => {
  return (
    <PageBackground>
      <Header>
        <TitleHeader>CodeLeap Network</TitleHeader>
      </Header>
      <MainContainer>
        <CreatePost />
      </MainContainer>
    </PageBackground>
  );
};

export default MainPage;

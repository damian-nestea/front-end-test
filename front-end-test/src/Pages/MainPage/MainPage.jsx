import React, { useContext } from "react";
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
import { GlobalContext } from "../../contexts/GlobalContext";

const MainPage = () => {
  const context = useContext(GlobalContext);
  const { postList } = context;
  return (
    <PageBackground>
      <Header>
        <TitleHeader>CodeLeap Network</TitleHeader>
      </Header>
      <MainContainer>
        <CreatePost />
        {postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </MainContainer>
      <RemoveModal />
      <EditModal />
    </PageBackground>
  );
};

export default MainPage;

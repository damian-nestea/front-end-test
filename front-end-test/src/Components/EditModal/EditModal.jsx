import React, { useContext, useState } from "react";
import {
  Label,
  ModalBackground,
  ModalContainer,
  Title,
  TitleInput,
  ContentInput,
  ButtonsContainer,
  CancelBtn,
  SaveBtn,
} from "./editModalStyles";
import { GlobalContext } from "../../contexts/GlobalContext";

const EditModal = () => {
  const context = useContext(GlobalContext);
  const { openEditModal, setOpenEditModal, choosenPost, editPost } = context;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  if (openEditModal) {
    return (
      <ModalBackground>
        <ModalContainer>
          <Title>Edit Item</Title>
          <Label>Title</Label>
          <TitleInput
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Label>Content</Label>
          <ContentInput
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <ButtonsContainer>
            <CancelBtn onClick={() => setOpenEditModal(false)}>
              Cancel
            </CancelBtn>
            <SaveBtn
              onClick={() => {
                editPost(choosenPost.id, title, content);
                title && content ? setOpenEditModal(false): null;
              }}
            >
              Save
            </SaveBtn>
          </ButtonsContainer>
        </ModalContainer>
      </ModalBackground>
    );
  }
};

export default EditModal;

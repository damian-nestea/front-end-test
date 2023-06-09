import React, { useContext } from "react";
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
  const { openEditModal, setOpenEditModal} = context;

  if (openEditModal) {
    return (
      <ModalBackground>
        <ModalContainer>
          <Title>Edit Item</Title>
          <Label>Title</Label>
          <TitleInput />
          <Label>Content</Label>
          <ContentInput />
          <ButtonsContainer>
            <CancelBtn onClick={() => setOpenEditModal(false)}>
              Cancel
            </CancelBtn>
            <SaveBtn>Save</SaveBtn>
          </ButtonsContainer>
        </ModalContainer>
      </ModalBackground>
    );
  }
};

export default EditModal;

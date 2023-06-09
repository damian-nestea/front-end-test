import React, { useContext } from "react";
import {
  ModalBackground,
  ModalContainer,
  Title,
  ButtonsContainer,
  CancelBtn,
  RemoveBtn,
} from "./removeModalStyles";
import { GlobalContext } from "../../contexts/GlobalContext";

const RemoveModal = () => {
  const context = useContext(GlobalContext);
  const { openRemoveModal, setOpenRemoveModal, choosenPost, deletePost } =
    context;

  if (openRemoveModal) {
    return (
      <ModalBackground>
        <ModalContainer>
          <Title>Are you sure you want to delete this item?</Title>
          <ButtonsContainer>
            <CancelBtn onClick={() => setOpenRemoveModal(false)}>
              Cancel
            </CancelBtn>
            <RemoveBtn
              onClick={() => {
                deletePost(choosenPost.id);
                setOpenRemoveModal(false);
              }}
            >
              Delete
            </RemoveBtn>
          </ButtonsContainer>
        </ModalContainer>
      </ModalBackground>
    );
  }
};

export default RemoveModal;

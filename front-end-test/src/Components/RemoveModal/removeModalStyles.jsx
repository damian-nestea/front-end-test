import styled from "styled-components";

export const ModalBackground = styled.div`
  background-color: rgb(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

export const ModalContainer = styled.article`
  position: fixed;
  top: 15%;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 1.5rem;
  background-color: #fff;
  color: #000;
  border: 1px solid #999;
  border-radius: 1rem;
`;

export const Title = styled.h2`
  font-size: 1.3rem;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  align-self: flex-end;
  gap: 1rem;
`;

export const CancelBtn = styled.button`
  background-color: #fff;
  border-radius: 0.5rem;
  color: #000;
  font-size: 1.1rem;
  font-weight: 700;
  border: 1px solid #999;
  padding: 0.4rem 2rem 0.3rem 2rem;
  cursor: pointer;
`;

export const RemoveBtn = styled.button`
  background-color: #ff5151;
  border-radius: 0.5rem;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 700;
  border: none;
  padding: 0.4rem 2rem 0.3rem 2rem;
  cursor: pointer;
`;

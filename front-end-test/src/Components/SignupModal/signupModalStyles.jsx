import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  width: 30rem;
  height: 15rem;
  border: 1px solid #ccc;
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const ModalTitle = styled.h1`
  font-size: 1.25rem;
  margin-bottom: 1.3rem;
`;
export const Label = styled.p``;
export const InputUsername = styled.input`
  height: 2rem;
  background-color: #fff;
  border: 1px solid #777;
  border-radius: 0.5rem;
  padding: 0 0.5rem;
`;
export const EnterButton = styled.button`
  background-color: #7695ec;
  border-radius: 0.5rem;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 700;
  border: none;
  padding: 0.4rem 2rem 0.3rem 2rem;
  margin-top: 1rem;
  text-transform: uppercase;
  align-self: flex-end;
  cursor: pointer;
  :disabled {
    opacity: 0.7;
    cursor: auto;
  }
`;

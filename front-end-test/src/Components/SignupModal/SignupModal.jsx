import React from "react";
import {
  Container,
  ModalTitle,
  Label,
  InputUsername,
  EnterButton,
} from "./signupModalStyles";

const SignupModal = () => {
  return (
    <Container>
      <ModalTitle>Welcome to CodeLeap network!</ModalTitle>
      <Label>Please enter your username</Label>
      <InputUsername />
      <EnterButton>Enter</EnterButton>
    </Container>
  );
};

export default SignupModal;

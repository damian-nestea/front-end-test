import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  ModalTitle,
  Label,
  InputUsername,
  EnterButton,
} from "./signupModalStyles";
import { GoToMainPage } from "../../Router/coordinator";

const SignupModal = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <ModalTitle>Welcome to CodeLeap network!</ModalTitle>
      <Label>Please enter your username</Label>
      <InputUsername />
      <EnterButton onClick={() => GoToMainPage(navigate)}>Enter</EnterButton>
    </Container>
  );
};

export default SignupModal;

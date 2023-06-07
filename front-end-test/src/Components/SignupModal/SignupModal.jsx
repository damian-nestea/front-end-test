import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  ModalTitle,
  Label,
  InputUsername,
  EnterButton,
} from "./signupModalStyles";
import { GoToMainPage } from "../../Router/coordinator";
import { GlobalContext } from "../../contexts/GlobalContext";
import { validUsername } from "../../constants/username";

const SignupModal = () => {
  const navigate = useNavigate();
  const context = useContext(GlobalContext);
  const { username, setUsername } = context;

  return (
    <Container>
      <ModalTitle>Welcome to CodeLeap network!</ModalTitle>
      <Label>Please enter your username</Label>
      <InputUsername
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <EnterButton
        onClick={() =>
          username === validUsername
            ? GoToMainPage(navigate)
            : alert("Invalid user! Try again")
        }
      >
        Enter
      </EnterButton>
    </Container>
  );
};

export default SignupModal;

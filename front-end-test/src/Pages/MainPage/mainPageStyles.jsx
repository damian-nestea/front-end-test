import styled from "styled-components";

export const PageBackground = styled.div`
  background-color: #ddd;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0 25vw;
`;

export const MainContainer = styled.main`
  background-color: #fff;
  flex-grow: 1;
  min-height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Header = styled.header`
  background-color: #7695ec;
  align-self: stretch;
  padding: 2rem;
`;
export const TitleHeader = styled.h1`
  font-size: 1.4rem;
  color: #fff;
`;

import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  border: 1px solid #999;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.5rem;
`;

export const TitleCreatePost = styled.h2`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const Label = styled.p``;
export const PostTitleInput = styled.input`
  flex-grow: 1;
  height: 2rem;
  background: #fff;
  border: 1px solid #777;
  border-radius: 0.4rem;
  margin-bottom: 1rem;
  padding: 0 0.5rem;
`;
export const PostContentInput = styled.textarea`
  flex-grow: 1;
  min-height: 5rem;
  resize: vertical;
  background: #fff;
  border: 1px solid #777;
  border-radius: 0.4rem;
  padding: 0.5rem;
`;
export const CreateButton = styled.button`
  background-color: #7695ec;
  border-radius: 0.5rem;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 700;
  border: none;
  padding: 0.4rem 2rem 0.3rem 2rem;
  margin-top: 1rem;
  align-self: flex-end;
  cursor: pointer;
`;

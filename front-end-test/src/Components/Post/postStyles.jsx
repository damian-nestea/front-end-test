import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const PostContainer = styled.article`
  background-color: #fff;
  border: 1px solid #999;
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
`;
export const TitleContainer = styled.div`
  background-color: #7695ec;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  padding: 2rem;
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
`;
export const Title = styled.h2`
  font-size: 1.4rem;
  color: #fff;
`;
export const RemoveAndEditIcons = styled.div`
  height: 20%;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
export const Icon = styled.img`
  height: 100%;
`;
export const PostInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const UserPost = styled.p`
  color: #777777;
  font-weight: 700;
`;
export const PostTime = styled.p`
  color: #777777;
`;
export const Content = styled.p`
  line-height: 1.5rem;
`;

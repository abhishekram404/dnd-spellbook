import styled from "styled-components";

export const SidebarStyled = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #fefbf6;
  height: 800px;
  overflow-y: auto;
`;

export const SidebarItemStyled = styled.div`
  padding: 1rem;
  color: #fefbf6;
  cursor: pointer;
  transition: all 0.2s linear;
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    border-bottom: 1px solid #fefbf640;
  }
`;

export const SidebarItemTitle = styled.h5``;

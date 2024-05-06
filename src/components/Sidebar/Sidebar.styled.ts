import styled from "styled-components";
import { Text } from "../../pages/SpellDetails/SpellDetails.styled";

export const SidebarStyled = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #fefbf610;
  flex: 1;
  overflow-y: auto;
`;

export const SidebarItemStyled = styled.div<{ isActive?: boolean }>`
  padding: 1rem;
  color: #fefbf6;
  cursor: pointer;
  transition: all 0.2s linear;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => (props.isActive ? "#fefbf640" : "none")};
  text-decoration: none;

  &:not(:last-child) {
    border-bottom: 1px solid #fefbf640;
  }

  &:hover {
    background-color: #fefbf610;
  }
`;

export const SidebarItemTitle = styled.p`
  text-decoration: none;
`;

export const SidebarSubtitle = styled(Text)`
  padding: 1rem;
  padding-bottom: 0;
  color: #fefbf680;
`;

import { Link } from "react-router-dom";
import styled from "styled-components";
import { Text } from "../../pages/SpellDetails/SpellDetails.styled";

export const SidebarStyled = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #fefbf640;
  flex: 1;
  overflow-y: auto;
`;

export const SidebarItemStyled = styled(Link)<{ $isActive?: boolean }>`
  padding: 1rem;
  color: #fefbf6;
  cursor: pointer;
  transition: all 0.2s linear;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => (props.$isActive ? "#fefbf640" : "none")};
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

export const SidebarFilterStatusStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const FilterTagsGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 1rem;
  padding-bottom: 0.5rem;

  &:only-child {
    padding-top: 1rem;
  }
`;

export const FilterTag = styled.div`
  background-color: #a0153e;
  color: #fefbf6ba;
  font-size: 1rem;
  padding: 0.5rem 0.8rem;
  line-height: 0.8rem;
  border-radius: 1rem;
  text-transform: capitalize;
`;

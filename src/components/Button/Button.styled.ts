import styled, { css } from "styled-components";

export const StyledButton = styled.button<{ isLink?: boolean }>`
  background: ${(props) => (props.isLink ? "transparent" : "#ff204e")};
  color: ${(props) => (props.isLink ? "#ff204e" : "#fefbf6")};
  padding: ${(props) => (props.isLink ? 0 : " 0.8rem")};
  font-size: 1rem;
  border: none;
  border-radius: 0.3rem;
  line-height: 0.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  ${(props) =>
    props.isLink
      ? css`
          line-height: 1.8rem;
          &:hover {
            color: #ff204eba;
          }
        `
      : css`
          &:hover {
            background: #ff204eba;
          }
        `}
`;

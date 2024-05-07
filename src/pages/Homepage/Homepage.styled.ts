import styled from "styled-components";

export const HomepageStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const HomepageBodyStyled = styled.div<{ showFiltersSection?: boolean }>`
  display: grid;
  grid-template-columns: ${(props) => props.showFiltersSection && "300px"} 300px 1fr;
  height: calc(100% - 73px);
`;

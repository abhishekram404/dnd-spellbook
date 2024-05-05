import styled from "styled-components";

export const SpellDetailsStyled = styled.main`
  padding: 2rem;
  color: #fefbf6;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const SpellTitle = styled.h1``;

export const SpellSpecificationsStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: auto auto;
  row-gap: 2rem;
`;

export const Group = styled.div``;

export const SectionSubtitle = styled.h3`
  margin-bottom: 1rem;
  border-bottom: 1px solid #fefbf6c0;
  padding-bottom: 0.6rem;
`;

export const SpecificationStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const SpecificatonTitle = styled.b`
  font-size: 1.1rem;
  color: #fefbf6d0;
`;
export const SpecificationValue = styled.p`
  color: #fefbf6c0;
`;

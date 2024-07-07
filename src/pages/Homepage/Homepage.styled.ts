import styled from 'styled-components'

export const HomepageStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const HomepageBodyStyled = styled.div<{ $showFiltersSection?: boolean }>`
  display: grid;
  grid-template-columns: ${props => props.$showFiltersSection && '300px'} 300px 1fr;
  height: calc(100% - 73px);
`

export const InfoBar = styled.div`
  background: #fefbf6;
  padding: 0.3rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  gap: 0.3rem;
`

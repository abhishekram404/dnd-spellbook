import styled from 'styled-components'
import { SidebarStyled } from '../Sidebar/Sidebar.styled'

export const FiltersSidebarStyled = styled(SidebarStyled)`
  gap: 0.7rem;
`

export const FiltersSidebarWrapper = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const ButtonsGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: stretch;

  > * {
    width: 100%;
  }
`

import Button from '@components/Button/Button'
import Checkbox from '@components/Checkbox/Checkbox'
import Divider from '@components/Divider/Divider'
import Dropdown from '@components/Dropdown/Dropdown'
import { SidebarSubtitle } from '@components/Sidebar/Sidebar.styled'
import useFilters from '@hooks/useFilters'
import React, { useState } from 'react'
import {
  ButtonsGroup,
  FiltersSidebarStyled,
  FiltersSidebarWrapper,
} from './FiltersSidebar.styled'
import { levels, schools } from './FiltersSidebar.utils'

export default function FiltersSidebar() {
  const { showFavoritesOnly, setFilters, setShowFavoritesOnly } = useFilters()
  const [values, setValues] = useState({
    school: '',
    level: '',
  })

  const handleChange = (name: string) => {
    return (e: React.ChangeEvent<HTMLSelectElement>) => {
      setValues(prev => ({
        ...prev,
        [name]: e.target.value,
      }))
    }
  }

  // when clicking on apply, set the filters to the filters context
  const handleApply = () => {
    setFilters?.(values)
  }

  const clearAllFilters = () => {
    setFilters?.({})
  }

  const handleShowFavoritesChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setShowFavoritesOnly?.(e.target.checked)
  }

  return (
    <FiltersSidebarStyled>
      <SidebarSubtitle>Filters</SidebarSubtitle>
      <FiltersSidebarWrapper>
        <Dropdown
          title="School"
          options={schools}
          onChange={handleChange('school')}
        />
        <Dropdown
          title="Level"
          options={levels}
          onChange={handleChange('level')}
        />
        <ButtonsGroup>
          <Button variant="link" onClick={clearAllFilters}>
            Clear all
          </Button>
          <Button variant="default" onClick={handleApply}>
            Apply
          </Button>
        </ButtonsGroup>
        <Divider />
        <Checkbox
          label="Show favorites only"
          checked={showFavoritesOnly}
          onChange={handleShowFavoritesChange}
        />
      </FiltersSidebarWrapper>
    </FiltersSidebarStyled>
  )
}

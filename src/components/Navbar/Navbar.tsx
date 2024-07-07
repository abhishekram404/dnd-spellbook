import Checkbox from '@components/Checkbox/Checkbox'
import Input from '@components/Input/Input'
import useFilters from '@hooks/useFilters'
import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { Link } from 'react-router-dom'
import { AppTitle, NavbarStyled, RightSection } from './Navbar.styled'

type Props = {
  searchQuery: string
  onSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Navbar({ searchQuery, onSearchChange }: Props) {
  const { showFiltersSection, setShowFiltersSection } = useFilters()

  const handleAdvanceFiltersCheckboxChanges = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setShowFiltersSection(e.target.checked)
  }

  return (
    <NavbarStyled>
      <AppTitle>
        <Link to="/">D&D Spellbook</Link>
      </AppTitle>
      <RightSection>
        <Checkbox
          label="Show advanced filters"
          checked={showFiltersSection}
          onChange={handleAdvanceFiltersCheckboxChanges}
        />
        <Input
          placeholder="Search spells"
          leftIcon={<Icon icon="bx:search" color="#fefbf6" fontSize={20} />}
          value={searchQuery}
          onChange={onSearchChange}
        />{' '}
      </RightSection>
    </NavbarStyled>
  )
}

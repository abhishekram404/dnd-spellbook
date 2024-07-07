import { BoldItalic } from '@components/BoldItalic/BoldItalic'
import Button from '@components/Button/Button'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Filters } from '@providers/FiltersProvider'
import {
  FilterTag,
  FilterTagsGroup,
  SidebarFilterStatusStyled,
  SidebarSubtitle,
} from './Sidebar.styled'

export const SidebarNoResult = ({
  searchQuery,
  onClearSearch,
}: {
  searchQuery?: string
  onClearSearch?: VoidFunction
}) => {
  return (
    <SidebarSubtitle>
      No results found
      {searchQuery?.trim() && (
        <>
          {' '}
          for <BoldItalic>{searchQuery}</BoldItalic>
        </>
      )}
      <br />
      <Button variant="link" onClick={onClearSearch}>
        <Icon icon={'mdi:clear-outline'} />
        Clear filters
      </Button>
    </SidebarSubtitle>
  )
}

type SidebarFilterStatusProps = {
  searchQuery?: string
  resultsCount?: number
  filters?: Filters
}

export const SidebarFilterStatus = ({
  searchQuery,
  resultsCount,
  filters = {},
}: SidebarFilterStatusProps) => {
  const filtersArray = Object.entries(filters)
    .filter(a => a[1])
    .map(([key, value]) => ({
      key,
      value,
    }))
  return (
    <SidebarFilterStatusStyled>
      <SidebarSubtitle>
        Showing {resultsCount} results
        {searchQuery?.trim() && (
          <>
            {' '}
            for <BoldItalic title={searchQuery}>{searchQuery}</BoldItalic>
          </>
        )}
      </SidebarSubtitle>

      {filtersArray.length > 0 && (
        <FilterTagsGroup>
          {filtersArray.map(filter => (
            <FilterTag key={filter.key}>
              {filter.key}: {filter.value}
            </FilterTag>
          ))}
        </FilterTagsGroup>
      )}
    </SidebarFilterStatusStyled>
  )
}

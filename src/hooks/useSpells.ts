import { useQuery } from '@tanstack/react-query'
import { useMemo } from 'react'
import { fetchSpells } from '../services/fetchSpells'
import { SidebarItemType } from '../components/Sidebar/SidebarItem'

type Props = {
  searchQuery: string
  filters?: {
    school?: string
    level?: string | number
  }
  showFavoritesOnly?: boolean
  favorites?: string[]
}

export default function useSpells({
  searchQuery = '',
  filters,
  showFavoritesOnly,
  favorites,
}: Props) {
  // fetch all spells, also supports params like: name, school, level
  const { data, isLoading: isSpellsLoading } = useQuery({
    queryKey: ['spells', searchQuery, filters],
    queryFn: () =>
      fetchSpells({
        name: searchQuery || undefined,
        school: filters?.school || undefined,
        level: filters?.level || undefined,
      }),
  })

  const results = useMemo(
    () =>
      showFavoritesOnly
        ? data?.results.filter((item: SidebarItemType) =>
            favorites?.includes(item.index),
          )
        : data?.results,
    [data?.results, showFavoritesOnly, favorites],
  )

  return {
    spells: results,
    isSpellsLoading: isSpellsLoading,
  }
}

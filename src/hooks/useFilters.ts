import { FiltersContext } from '@providers/FiltersProvider'
import { useContext } from 'react'

export default function useFilters() {
  const object = useContext(FiltersContext)

  return object
}

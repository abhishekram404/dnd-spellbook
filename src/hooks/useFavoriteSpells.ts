import { LocalStorageService } from '@services/LocalStorageService'
import { useEffect, useState } from 'react'

export default function useFavoriteSpells() {
  const initialFavoriteSpells =
    LocalStorageService.get<string[]>('favorite-spells')

  const [favorites, setFavorites] = useState(initialFavoriteSpells || [])

  const removeSpellFromFavorites = (index: string) => {
    setFavorites(prev => prev.filter(item => item !== index))
  }

  // takes the spell index and adds it to the favs array
  const markSpellAsFavorite = (index: string) => {
    const doesAlreadyExist = favorites.includes(index)

    if (doesAlreadyExist) removeSpellFromFavorites(index)
    else setFavorites(prev => [...prev, index])
  }

  // updates the local storage everytime any spell is favorited
  useEffect(() => {
    LocalStorageService.set('favorite-spells', favorites)
  }, [favorites])

  return {
    favorites,
    markSpellAsFavorite,
    removeSpellFromFavorites,
  }
}

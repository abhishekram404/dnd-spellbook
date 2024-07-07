import axios from 'axios'

export const fetchSpellByIndex = async (index: string) =>
  (await axios.get(`/spells/${index}`)).data

import axios from "axios";

export const searchSpellByName = async (name: string) =>
  (await axios.get(`/spells/?name=${name}`)).data;

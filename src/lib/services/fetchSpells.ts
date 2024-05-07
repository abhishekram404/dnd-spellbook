import axios from "axios";

export const fetchSpells = async (params: object) =>
  (
    await axios.get("/spells", {
      params,
    })
  ).data;

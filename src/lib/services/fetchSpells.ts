import axios from "axios";

export const fetchSpells = async () => (await axios.get("/spells")).data;

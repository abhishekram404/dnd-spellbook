import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchSpellByIndex } from "../../lib/services/fetchSpellByIndex";
import { SpellDetailsStyled } from "./SpellDetails.styled";

type Props = {};

const SpellDetails = (props: Props) => {
  const { index = "" } = useParams();
  const { data } = useQuery({
    queryKey: [index],
    queryFn: () => fetchSpellByIndex(index),
  });
  return <SpellDetailsStyled>{JSON.stringify(data)}</SpellDetailsStyled>;
};

export default SpellDetails;

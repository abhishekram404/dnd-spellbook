import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchSpellByIndex } from "../../lib/services/fetchSpellByIndex";
import {
  Group,
  SectionSubtitle,
  SpecificationStyled,
  SpecificationValue,
  SpecificatonTitle,
  SpellDetailsStyled,
  SpellSpecificationsStyled,
  SpellTitle,
} from "./SpellDetails.styled";

type Props = {};

const SpecificationItem = ({ title, value }: { title: string; value: any }) => {
  return (
    <SpecificationStyled>
      <SpecificatonTitle>{title}</SpecificatonTitle>
      <SpecificationValue>{value}</SpecificationValue>
    </SpecificationStyled>
  );
};

const SpellDetails = (props: Props) => {
  const { index = "" } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: [index],
    queryFn: () => fetchSpellByIndex(index),
  });

  if (isLoading) return <div>Loading...</div>;
  return (
    <SpellDetailsStyled>
      <SpellTitle>{data.name}</SpellTitle>
      <Group>
        <SectionSubtitle>Specifications</SectionSubtitle>
        <SpellSpecificationsStyled>
          <SpecificationItem title={"LEVEL"} value={data.level} />
          <SpecificationItem title={"CASTING TIME"} value={data.casting_time} />
          <SpecificationItem title={"RANGE/AREA"} value={data.range} />
          <SpecificationItem
            title={"COMPONENTS"}
            value={data.components.toString()}
          />
          <SpecificationItem title={"DURATION"} value={data.duration} />
          <SpecificationItem title={"SCHOOL"} value={data.school.name} />
        </SpellSpecificationsStyled>
      </Group>
    </SpellDetailsStyled>
  );
};

export default SpellDetails;

import {
  SpecificationStyled,
  SpecificationValue,
  SpecificatonTitle,
} from "./SpellDetails.styled";

export const SpecificationItem = ({
  title,
  value,
}: {
  title: string;
  value: any;
}) => {
  return (
    <SpecificationStyled>
      <SpecificatonTitle>{title}</SpecificatonTitle>
      <SpecificationValue>{value}</SpecificationValue>
    </SpecificationStyled>
  );
};

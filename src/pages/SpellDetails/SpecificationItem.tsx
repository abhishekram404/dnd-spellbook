import {
  SpecificationStyled,
  SpecificationValue,
  SpecificatonTitle,
} from './SpellDetails.styled'

export function SpecificationItem({
  title,
  value,
}: {
  title: string
  value: any
}) {
  return (
    <SpecificationStyled>
      <SpecificatonTitle>{title}</SpecificatonTitle>
      <SpecificationValue>{value}</SpecificationValue>
    </SpecificationStyled>
  )
}

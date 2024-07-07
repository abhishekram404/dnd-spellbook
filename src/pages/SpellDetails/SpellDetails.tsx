import HomepageBodyInfo from '@components/HomepageBodyInfo/HomepageBodyInfo'
import { Icon } from '@iconify/react/dist/iconify.js'
import { fetchSpellByIndex } from '@services/fetchSpellByIndex'
import { useQuery } from '@tanstack/react-query'
import { textMapper } from '@utils/textMapper'
import { useParams } from 'react-router-dom'
import { SpecificationItem } from './SpecificationItem'
import {
  Group,
  SectionSubtitle,
  SectionSubtitleWithLeadingIcon,
  SpellDetailsStyled,
  SpellSpecificationsStyled,
  SpellTitle,
  Text,
} from './SpellDetails.styled'

const SpellDetails = () => {
  const { index = '' } = useParams()
  const { data, isLoading } = useQuery({
    queryKey: [index],
    queryFn: () => fetchSpellByIndex(index),
  })

  if (isLoading) return <HomepageBodyInfo>Please wait...</HomepageBodyInfo>
  return (
    <SpellDetailsStyled>
      <SpellTitle>{data.name}</SpellTitle>
      <Group>
        <SectionSubtitle>Specifications</SectionSubtitle>
        <SpellSpecificationsStyled>
          <SpecificationItem title={'LEVEL'} value={data.level} />
          <SpecificationItem title={'CASTING TIME'} value={data.casting_time} />
          <SpecificationItem title={'RANGE/AREA'} value={data.range} />
          <SpecificationItem
            title={'COMPONENTS'}
            value={data.components.toString()}
          />
          <SpecificationItem title={'DURATION'} value={data.duration} />
          <SpecificationItem title={'SCHOOL'} value={data.school.name} />
        </SpellSpecificationsStyled>
      </Group>

      <Group>
        <SectionSubtitle>Description</SectionSubtitle>
        {textMapper(data.desc, true)}
      </Group>

      {data.higher_level.length > 0 && (
        <Group>
          <SectionSubtitleWithLeadingIcon>
            <Icon
              icon={'mdi:chevron-double-up'}
              color="#ff204e"
              fontSize={25}
            />{' '}
            At Higher Levels
          </SectionSubtitleWithLeadingIcon>
          {textMapper(data.higher_level, true)}
        </Group>
      )}

      {data.material && (
        <Text>
          <i>Material: {data.material}</i>
        </Text>
      )}

      <Group></Group>
    </SpellDetailsStyled>
  )
}

export default SpellDetails

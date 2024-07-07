import React from 'react'
import { Text } from '../pages/SpellDetails/SpellDetails.styled'
export const textMapper = (
  textArray: string[],
  breakAfterEachLine?: boolean,
) => (
  <>
    {textArray.map((text, index, arr) => {
      const isLast = index >= arr.length - 1
      return (
        <React.Fragment key={text}>
          <Text key={text}>{text}</Text>
          {breakAfterEachLine && !isLast && <br />}
        </React.Fragment>
      )
    })}
  </>
)

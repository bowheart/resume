import React from 'react'
import styled from 'styled-components'

import { Column, H1, H3, Skill } from 'components'
import { colors } from '../../constants'

export default function OtherSkills() {
  return (
    <Wrapper>
      <Column>
        <Skill rating={85} color={colors.one}>
          Spanish Translation
        </Skill>
      </Column>
      <Column>
        <Skill rating={75} color={colors.two}>
          Technical/Creative Writing
        </Skill>
      </Column>
      <Column>
        <Skill rating={70} color={colors.three}>
          Music Composition
        </Skill>
      </Column>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: row;
  padding: 20rem 0;
`

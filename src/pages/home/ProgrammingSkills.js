import React from 'react'
import styled from 'styled-components'

import { Column, H1, H3, Skill } from 'components'
import { colors } from '../../constants'

export default function ProgrammingSkills() {
  return (
    <Wrapper>
      <Column>
        <Skill rating={90} color={colors.one}>
          JavaScript
        </Skill>
        <Skill rating={85} color={colors.two}>
          React
        </Skill>
        <Skill rating={90} color={colors.three}>
          Redux
        </Skill>
        <Skill rating={40} color={colors.one}>
          React Native
        </Skill>
      </Column>
      <Column>
        <Skill rating={70} color={colors.two}>
          Node
        </Skill>
        <Skill rating={60} color={colors.three}>
          MySQL
        </Skill>
        <Skill rating={50} color={colors.one}>
          MongoDB
        </Skill>
        <Skill rating={70} color={colors.two}>
          GraphQL
        </Skill>
      </Column>
      <Column>
        <Skill rating={85} color={colors.three}>
          PHP
        </Skill>
        <Skill rating={65} color={colors.one}>
          Jest
        </Skill>
        <Skill rating={80} color={colors.two}>
          CSS
        </Skill>
        <Skill rating={65} color={colors.three}>
          RxJS
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

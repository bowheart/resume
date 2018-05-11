import React from 'react'
import styled from 'styled-components'

import { colors } from '../constants'

export const Column = styled.div`
  display: flex;
  flex: 1;
  flex-flow: column;

  &:nth-of-type(n + 2) {
    margin-left: 15rem;
  }
`

export const H1 = styled.h1`
  color: ${colors.faded};
  font-weight: normal;
  margin: 0;
`

export const H2 = styled.h2`
  color: ${colors.faded};
  font-weight: normal;
  margin: 0;
`

export const H3 = styled.h3`
  color: ${colors.faded};
  font-weight: normal;
  margin: 0;
`

export const Heading = styled.div`
  border-bottom: 1px solid ${colors.one};
  color: ${colors.faded};
  font-size: 24rem;
  margin-top: 20rem;
  padding: 10rem 0;
  text-transform: uppercase;
`

export const Icon = ({ className, name, ...passThrough }) => (
  <i className={`fa fa-${name} ${className}`} {...passThrough} />
)

export const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
`

export const Skill = ({ color, children, rating }) => (
  <SkillWrapper>
    <SkillLabel>{children}</SkillLabel>
    <SkillBar color={color} width={rating} />
  </SkillWrapper>
)

export const SkillBar = ({ color, width }) => (
  <SkillBarWrapper>
    <SkillBarPath>
      <SkillBarFill color={color} width={width} />
    </SkillBarPath>
  </SkillBarWrapper>
)

export const SkillBarFill = styled.div`
  background: ${({ color }) => color};
  width: ${({ width }) => width}%;
`

export const SkillBarPath = styled.div`
  background: #f1f1f1;
  display: flex;
  width: 100%;
`

export const SkillBarWrapper = styled.div`
  display: flex;
  height: 40rem;
  padding: 10rem 0;
  width: 100%;
`

export const SkillLabel = styled.div`
  color: ${colors.faded};
`

export const SkillWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
`

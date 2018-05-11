import React from 'react'
import styled from 'styled-components'

import { H2 } from 'components'
import { colors, formatDate, jobs } from '../../constants'

export default function Experience() {
  return (
    <Wrapper>
      {[...jobs].reverse().map(job => <Job key={job.company} {...job} />)}
    </Wrapper>
  )
}

const Job = ({ company, description, end, position, start }) => (
  <JobWrapper>
    <H2>{position}</H2>
    <Company>{company}</Company>
    <Line>
      {formatDate(start)} &ndash; {formatDate(end, 'present')}
    </Line>
    <Line>{description}</Line>
  </JobWrapper>
)

const Company = styled.div`
  color: ${colors.three};
  margin: 5rem 0;
`

const JobWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  line-height: 1.6;

  &:nth-of-type(n + 2) {
    margin-top: 25rem;
  }
`

const Line = styled.div`
  margin: 5rem 0;
`

const Wrapper = styled.div`
  padding: 20rem 0;
`

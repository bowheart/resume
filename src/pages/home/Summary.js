import React from 'react'
import styled from 'styled-components'

import { H1, H3 } from 'components'

export default function Summary() {
  return (
    <Wrapper>
      <Left>
        <H1>Joshua Claunch</H1>
        <H3>JavaScript Engineer</H3>
      </Left>
      <Right>
        <Portrait />
      </Right>
    </Wrapper>
  )
}

const Left = styled.div`
  flex: 1;
`

const Portrait = styled.div`
  background: url(/img/portrait.jpg) no-repeat center center;
  background-size: cover;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
  height: 120rem;
  width: 120rem;
`

const Right = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`

const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding: 60rem 0 0;
`

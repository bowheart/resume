import React from 'react'
import styled from 'styled-components'

import { Icon } from 'components'
import { colors } from '../../constants'

export default function Hobbies() {
  return (
    <Wrapper>
      <Item icon="laptop">coding...</Item>
      <Item icon="futbol-o">basketball/football</Item>
      <Item icon="music">singing/acting/dancing</Item>
      <Item icon="music">piano/violin</Item>
      <Item icon="music">just music</Item>
    </Wrapper>
  )
}

const Item = ({ children, icon }) => (
  <ItemWrapper>
    <ItemIcon name={icon} />
    <ItemText>{children}</ItemText>
  </ItemWrapper>
)

const ItemIcon = styled(Icon)`
  color: ${colors.faded};
  line-height: 1.6;
`

const ItemText = styled.span`
  color: ${colors.one};
  display: inline-block;
  margin-left: 15rem;
`

const ItemWrapper = styled.div`
  display: flex;
  flex-flow: row;
`

const Wrapper = styled.div`
  line-height: 1.6;
  padding: 20rem 0;
`

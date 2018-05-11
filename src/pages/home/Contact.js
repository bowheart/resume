import React from 'react'
import styled from 'styled-components'

import { Icon } from 'components'
import { colors } from '../../constants'

export default function Contact() {
  return (
    <Wrapper>
      <Item icon="envelope-o">bowheart31@gmail.com</Item>
      <Item icon="phone">504-303-1599</Item>
      <Item icon="github">github.com/bowheart</Item>
      <Item icon="twitter">@josh_claunch</Item>
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

import React from 'react'
import styled from 'styled-components'

import { Column } from 'components'
import { colors } from '../../constants'

export default function Portfolio() {
  return (
    <Wrapper>
      <Column>
        <Link>mindful-x.com</Link>
        <Link>solacefit.com</Link>
        <Link>trackwithjane.com</Link>
        <Link>openside.com</Link>
        <Link>lavasurf.com</Link>
        <Link>intelbuddy.com</Link>
      </Column>
      <Column>
        <Link>trackacompany.com</Link>
        <Link>panda.support</Link>
        <Link>naturesproductsforme.com</Link>
        <Link>solarpartnr.com</Link>
        <Link>leadranker.com</Link>
        <Link>learningsuite.byu.edu</Link>
      </Column>
    </Wrapper>
  )
}

const Link = styled.div`
  color: ${colors.one};
`

const Wrapper = styled.div`
  display: flex;
  flex-flow: row;
  line-height: 1.6;
  padding: 20rem 0;
`

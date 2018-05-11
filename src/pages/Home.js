import React from 'react'
import styled from 'styled-components'

import Contact from './home/Contact'
import Experience from './home/Experience'
import Hobbies from './home/Hobbies'
import OtherSkills from './home/OtherSkills'
import Portfolio from './home/Portfolio'
import ProgrammingSkills from './home/ProgrammingSkills'
import Summary from './home/Summary'
import { Column, Heading, Row } from 'components'
import { colors } from '../constants'

const Home = () => (
  <Wrapper>
    <Summary />
    <Heading bg={colors.one}>programming skills</Heading>
    <ProgrammingSkills />
    <Heading bg={colors.one}>other skills</Heading>
    <OtherSkills />
    <Heading bg={colors.one}>portfolio</Heading>
    <Portfolio />
    <Heading bg={colors.one}>experience</Heading>
    <Experience />
    <Row>
      <Column>
        <Heading bg={colors.one}>contact</Heading>
        <Contact />
      </Column>
      <Column>
        <Heading bg={colors.one}>hobbies and stuff</Heading>
        <Hobbies />
      </Column>
    </Row>
  </Wrapper>
)

export default Home

const Wrapper = styled.main`
  max-width: 900rem;
  padding: 0 15rem;
  width: 100%;
`

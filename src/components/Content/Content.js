import React from 'react'
import SideBar from 'components/SideBar'
import styled from 'styled-components'

import Page from 'components/Page'

const Content = ({ children, routes }) => {
  console.log(children)
  return (
    <Wrapper>
      <SideBar routes={routes} />
      <Page> {children}</Page>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`
export default Content

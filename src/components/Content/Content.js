import React from 'react'
import SideBar from 'components/SideBar'
import styled from 'styled-components'
const Content = ({ children, routes }) => {
  return (
    <Container>
      <SideBar routes={routes} />
      {children}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`
export default Content

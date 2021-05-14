import React from 'react'
import styled from 'styled-components'

const Page = ({ children }) => <PageWrapper>{children}</PageWrapper>

const PageWrapper = styled.div`
  margin: 30px;
`

export default Page

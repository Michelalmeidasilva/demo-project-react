import React, { forwardRef } from 'react'
import styled from 'styled-components'

import { MEDIADESKTOP } from 'helpers'
import { Row } from 'components'

const Column = forwardRef((props, ref) => <Row ref={ref} flexDirection='column' {...props} />)

export const ColumnDesktop = styled(Column)`
  display: none;
  @media (min-width: ${MEDIADESKTOP}px) {
    display: flex;
  }
`

export const ColumnMobile = styled(Column)`
  display: flex;
  @media (min-width: ${MEDIADESKTOP}px) {
    display: none;
  }
`

export default Column

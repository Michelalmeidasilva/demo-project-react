import styled from 'styled-components'
import { space, layout, color, flexbox, border, shadow, position } from 'styled-system'
import { MEDIADESKTOP } from 'helpers'
const Row = styled.div(
  {
    display: 'flex'
  },
  flexbox,
  space,
  layout,
  color,
  border,
  shadow,
  position
)

export const RowDesktop = styled(Row)`
  display: none;
  @media (min-width: ${MEDIADESKTOP}px) {
    display: flex;
  }
`

export default Row

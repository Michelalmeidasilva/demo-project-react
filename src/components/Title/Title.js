import { Text } from 'components/'
import { space, layout, typography, color, variant, position } from 'styled-system'
import styled from 'styled-components'

const Title = styled.div(
  variant({
    variants: {
      ['extra']: {
        fontSize: 40,
        lineHeight: '48px'
      },
      ['big']: {
        fontSize: 34,
        lineHeight: '40px'
      },
      ['medium']: {
        fontSize: 24,
        lineHeight: '32px'
      },
      ['small']: {
        fontSize: 16,
        lineHeight: '24px'
      }
    }
  }),
  space,
  layout,
  typography,
  color,
  position
)
export default Title

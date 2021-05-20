import styled from 'styled-components'
import { space, layout, typography, color, variant, position } from 'styled-system'

const EXTRA = 'extra'
const BIG = 'big'
const MEDIUM = 'medium'
const REGULAR = 'regular'
const SMALL = 'small'
const TINY = 'tiny'

const Text = styled.p(
  variant({
    variants: {
      [EXTRA]: {
        fontSize: 28,
        lineHeight: '40px'
      },
      [BIG]: {
        fontSize: 24,
        lineHeight: '29px'
      },
      [MEDIUM]: {
        fontSize: 20,
        lineHeight: '24px'
      },
      [REGULAR]: {
        fontSize: 16,
        lineHeight: '25px'
      },
      [SMALL]: {
        fontSize: 14,
        lineHeight: '17px'
      },
      [TINY]: {
        fontSize: 12,
        lineHeight: '17px'
      }
    }
  }),
  space,
  layout,
  typography,
  color,
  position
)

export default Text

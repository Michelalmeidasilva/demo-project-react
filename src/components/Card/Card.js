import styled from 'styled-components'
import { Column } from '../Column'

const Card = props => (
  <CardStyle>
    <Column {...props} />
  </CardStyle>
)

const CardStyle = styled.div`
  padding: 20px 35px;
  borderradius: 4;
  backgroundcolor: white;
  shadowcolor: black;
`

export default Card

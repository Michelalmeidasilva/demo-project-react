import { Column, Text } from 'components'
import styled from 'styled-components'

const TextArea = ({ name, label, register }) => (
  <Column>
    {label && <Text mb={1}>{label}</Text>}
    <TextAreaStyle id='pedido' required rows='5' {...register(name, { required: true })} />
  </Column>
)

const TextAreaStyle = styled.textarea`
   {
    width: 250px;
    height: 100px;
  }
`
export default TextArea

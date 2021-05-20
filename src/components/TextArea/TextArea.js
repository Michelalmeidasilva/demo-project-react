import { Column, Text } from 'components'
import styled from 'styled-components'

const TextArea = ({ name, label, register }) => (
  <Column mb='20px'>
    {label && <Text mb={1}>{label}</Text>}
    <TextAreaStyle id='pedido' required rows='5' {...register(name, { required: true })} />
  </Column>
)

const TextAreaStyle = styled.textarea`
   {
    width: 250px;
    height: 100px;
    padding: 30px;
  }
`
export default TextArea

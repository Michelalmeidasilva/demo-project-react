import React from 'react'
import styled from 'styled-components'

import { Text, Column } from 'components'

const Input = ({ label, name, placeholder, register, type, error, ...props }) => (
  <Column {...props}>
    {label && <Text mb={1}>{label}</Text>}
    <InputWrapper type={type} placeholder={placeholder} error={error} {...register(name, { required: true })} />
  </Column>
)

const InputWrapper = styled.input`
  height: 30px;
  border: 1px solid black;
  border-radius: 4px;
  padding: 4px 8px;
`

Input.defaultProps = {
  mb: 10
}
export default Input

import React from 'react'
import styled from 'styled-components'
import { space, layout, typography, color, border } from 'styled-system'

const Button = ({ children, ...props }) => <ButtonStyle {...props}>{children}</ButtonStyle>

const ButtonStyle = styled.button(space, layout, typography, color, border)

export default Button

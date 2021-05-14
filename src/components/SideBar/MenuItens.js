import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Item = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background: #252831;
    border-left: 8px solid #690001;
    cursor: pointer;
  }
`

const Label = styled.span`
  margin-left: 30px;
  font-size: 22px;
`
const MenuItens = ({ routes }) =>
  routes.map(route => (
    <Item to={route.path}>
      <Label>{route.title}</Label>
    </Item>
  ))

export default MenuItens

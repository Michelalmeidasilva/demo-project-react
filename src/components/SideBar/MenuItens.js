import React, { Fragment } from 'react'
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
const MenuItens = ({ data }) => {
  return data.map(item => {
    return <ContentItem item={item} />
  })
}

const ContentItem = ({ item }) => {
  return (
    <Fragment>
      <Item to={item.path} onClick={item.subNav}>
        <div>
          <Label>{item.title}</Label>
        </div>
      </Item>{' '}
    </Fragment>
  )
}

export default MenuItens
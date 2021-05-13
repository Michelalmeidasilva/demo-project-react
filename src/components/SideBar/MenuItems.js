import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SidebarLink = styled(Link)`
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

const SidebarLabel = styled.span`
  margin-left: 30px;
  font-size: 22px;
`

const SubMenuItems = ({ item }) => {
  return (
    <Fragment>
      <SidebarLink to={item.path} onClick={item.subNav}>
        <div>
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
      </SidebarLink>
    </Fragment>
  )
}

export default SubMenuItems

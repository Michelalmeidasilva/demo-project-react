import React, { Fragment } from 'react'
import styled from 'styled-components'

import GuildIcon from '../../assets/guild-icon.png'

import MenuItens from './MenuItens'

const SideBar = ({ rotas }) => {
  return (
    <Fragment>
      <SidebarNav>
        <SidebarWrap>
          <WrapMenuHeader>
            <MenuHeader>
              <IconMenuHeader src={GuildIcon} />
              <TitleMenuHeader>
                <TextMenuHeader> Test </TextMenuHeader>
              </TitleMenuHeader>
            </MenuHeader>
          </WrapMenuHeader>
          <MenuItens data={rotas}></MenuItens>
        </SidebarWrap>
      </SidebarNav>
    </Fragment>
  )
}

const TextMenuHeader = styled.text`
  font-size: 36px;
  color: white;
`
const TitleMenuHeader = styled.div`
  width: 100px;
  height: 100px;
  margin: 15px;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`
const IconMenuHeader = styled.img`
  width: 100px;
  height: 100px;
  margin: 15px;
`
const WrapMenuHeader = styled.div`
  padding: 30px;
  background: #690001;
  margin-bottom: 50px;
  @media (max-width: 600px) {
    padding: 0px;
  }
`
const MenuHeader = styled.section`
  background: 15171c;
  width: max-width;
  height: 100px;
  display: flex;
`

const SidebarNav = styled.nav`
  background: #15171c;
  height: 100vh;
  display: flex;
  justify-content: center;
  width: 350px;
`

const SidebarWrap = styled.div`
  width: 100%;
`
export default SideBar

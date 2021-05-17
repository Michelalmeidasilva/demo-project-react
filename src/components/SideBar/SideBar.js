import React from 'react'
import styled from 'styled-components'
import GuildIcon from '../../assets/guild-icon.png'
import MenuItens from './MenuItens'

const SideBar = ({ routes }) => (
  <>
    <SidebarNav>
      <HeaderMenu>
        <IconMenuHeader src={GuildIcon} />
        <TextMenuHeader> Prime Test</TextMenuHeader>
      </HeaderMenu>
      <MenuItens routes={routes} />
    </SidebarNav>
  </>
)

const TextMenuHeader = styled.text`
  font-size: 25px;
  color: white;
  padding: 30px;
`
const IconMenuHeader = styled.img`
  width: 50px;
  height: 50px;
`
const HeaderMenu = styled.div`
  background: #690001;
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`
const SidebarNav = styled.nav`
  background: #15171c;
  width: 275px;
  height: 100vh;
`
export default SideBar

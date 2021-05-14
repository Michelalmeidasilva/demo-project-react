import React from 'react'
import styled from 'styled-components'
import { Switch } from 'react-router-dom'
import GuildIcon from '../../assets/guild-icon.png'
import { ContentItem } from './MenuItens'

const SideBar = ({ routes }) => (
  <>
    <SidebarNav>
      <SidebarWrap>
        <WrapMenuHeader>
          <MenuHeader>
            <IconMenuHeader src={GuildIcon} />
            <TitleMenuHeader>
              <TextMenuHeader> Prime </TextMenuHeader>
              <TextMenuHeader> Test </TextMenuHeader>
            </TitleMenuHeader>
          </MenuHeader>
        </WrapMenuHeader>
        {routes.map(item => (
          <ContentItem item={item} />
        ))}
      </SidebarWrap>
    </SidebarNav>
  </>
)

const TextMenuHeader = styled.text`
  font-size: 36px;
  color: white;
`

const TitleMenuHeader = styled.div`
  margin: 15px;
  align-items: center;
  display: flex;
  flex-direction: column;
`

const IconMenuHeader = styled.img`
  width: 100px;
  height: 100px;
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
  display: flex;
  margin: 15px;
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

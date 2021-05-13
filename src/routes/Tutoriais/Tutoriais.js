import React from 'react'
import Content from 'components/Content'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
const Tutoriais = () => {
  return (
    <Content>
      <Video>
        <TitleVideo> Icc 10 Heroic </TitleVideo>
        <ReactPlayer width='800px' height='450px' url='https://www.youtube.com/watch?v=6SIUJLbCWqk' />
      </Video>
    </Content>
  )
}

const TitleVideo = styled.text`
  font-size: 30px;
`
const Video = styled.div`
  transform: translate(-25%, -50%);
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
`
export default Tutoriais

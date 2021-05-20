import React, { useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

import { getTutoriais } from 'services/tutoriais'

const Tutoriais = () => {
  const [tutoriais, setTutoriais] = useState([])

  useEffect(() => {
    async function fetchData() {
      const request = await getTutoriais()
      setTutoriais(request.data)
    }
    fetchData()
  }, [])

  return (
    <>
      <Main>
        {tutoriais.map(video => (
          <Video>
            <TitleVideo fontColor='black' fontSize='20px'>
              {video.nome}
            </TitleVideo>
            <ReactPlayer width='500px' height='300px' url={video.url} />
          </Video>
        ))}
      </Main>
    </>
  )
}

const Main = styled.div`
  width: 650px;
  padding: 30px;
  display: flex;
  flex-wrap: wrap;
`
const TitleVideo = styled.text`
  font-size: ${props => props.fontSize || '32px'};
  color: ${props => props.fontColor || 'black'};
`
const Video = styled.div`
  margin: 10px;
  box-shadow: 1px 1px 1px 1px grey;
`
export default Tutoriais

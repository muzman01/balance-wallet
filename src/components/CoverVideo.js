import React from 'react'
import styled from 'styled-components'
import GIF from '../assets/blnwallet.png'


const VideoContainer = styled.div`
width: 100%;

img{
    width: 100%;
    height: 600px;
    border-radius:10px;
}

@media (max-width: 64em) {
  min-width: 40vh;
}
`

const CoverVideo = () => {
  return (
    <VideoContainer>
        <img src={GIF}  />
    </VideoContainer>
  )
}

export default CoverVideo
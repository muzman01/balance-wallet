import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import walletLogo from "../assets/walletlogonew.png"
const LogoText = styled.h1`

font-size: 2em;
color: #fbbe16;
transition: all 0.2s ease;

&:hover{
    transform: scale(1.1);
}

@media (max-width: 64em){
font-size: ${props => props.theme.fontlg};

}
`

const Logo = () => {
  return (
    <LogoText>
        <Link to="/">
          <img src={walletLogo} width="300px" />
        </Link>
    </LogoText>
  )
}

export default Logo
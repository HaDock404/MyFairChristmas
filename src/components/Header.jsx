import { Link } from 'react-router-dom'
import styled from 'styled-components'

import logo from '../assets/perenoel.jpg'

const CardHeader = styled.header`
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,32,20,1) 38%);
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
`

const CardLink = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
`

const CardImg = styled.img`
    height: 75px;
    width: 75px;
    border-radius: 100%;
`

const CardTitle = styled.div`
    font-family: 'Arima', cursive;
    color: white;
    font-size: 30px;
    margin-left: 10px;
    text-shadow: 5px 2px 10px white;
`

function Header() {
    return (
        <CardHeader>
            <CardLink to="/">
                <CardImg src={logo} alt="logo"/>
                <CardTitle>My Fair Christmas</CardTitle>
            </CardLink>
        </CardHeader>
        
    )
}

export default Header
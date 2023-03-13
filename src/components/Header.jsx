import { Link } from 'react-router-dom'
import styled from 'styled-components'

import logo from '../assets/perenoel.jpg'

const CardHeader = styled.header`
@media only screen and (min-width: 768px) {
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,32,20,1) 38%);
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 20px;
}
@media only screen and (max-width: 767px) {
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,32,20,1) 38%);
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
}
`

const CardLink = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
`

const CardImg = styled.img`
@media only screen and (min-width: 401px) {
    height: 75px;
    width: 75px;
    border-radius: 100%;
}
@media only screen and (max-width: 400px) {
    height: 50px;
    width: 50px;
    border-radius: 100%;
}   
`

const CardTitle = styled.div`
@media only screen and (min-width: 401px) {
    font-family: 'Arima', cursive;
    color: white;
    font-size: 30px;
    margin-left: 10px;
    text-shadow: 5px 2px 10px white;
}
@media only screen and (max-width: 400px) {
    font-family: 'Arima', cursive;
    color: white;
    font-size: 25px;
    margin-left: 10px;
    text-shadow: 5px 2px 10px white;
}
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
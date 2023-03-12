import styled from "styled-components"
import { Link } from "react-router-dom"

const CardError = styled.div`
@media only screen and (min-width: 750px) {
    margin: 0px;
    margin-top: 5%;
    height: calc(100vh - 295px);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}
`

const CardCode = styled.h1`
@media only screen and (min-width: 750px) {
    font-size: 222px;
    font-weight: 700;
    margin: 0px;
}
`

const CardMessage = styled.div`
@media only screen and (min-width: 750px) {
    font-size: 28px;
    font-weight: 700;
    width: 100%px;
    text-align: center;
}
`

const StyledBackHome = styled(Link)`
@media only screen and (min-width: 750px) {
    font-size: 18px;
    text-decoration: underline;
    color: #2c3e50;
    padding-top: 100px;
    margin-bottom: 40px;
}
`

function Error() {
    return (
        <CardError>
            <CardCode>404</CardCode>
            <CardMessage>Oups! La page que vous demandez n'existe pas.</CardMessage>
            <StyledBackHome to="/">Retourner sur la page d'accueil</StyledBackHome>
        </CardError>
    )
}

export default Error
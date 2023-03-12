import styled from "styled-components"

const CardFooter = styled.footer`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #ed4545;
    color: black;
`

function Footer() {
    return (
        <CardFooter>Tout droits réservés OpenClassRooms</CardFooter>
    )
}

export default Footer
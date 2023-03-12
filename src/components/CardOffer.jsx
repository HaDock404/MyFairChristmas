import styled from "styled-components"

const Cardoffer = styled.article`
    width: 350px;
    height: 450px;
    border-radius: 20px;
`

const CardTitle = styled.h3`
    margin-left: 10px;
    color: #ed4545;
    font-weight: 1000;
`

const CardExplanation = styled.div`
    color: #666666;
    margin: 10px;
`

const CardPrice = styled.div`
    margin-top: 30px;
    margin-left: 10px;
    color: #666666;
`

const SpanPrice = styled.span`
    color: black;
    font-weight: 800;
    font-size: 50px;
`

function CardOffer() {
    return (
        <Cardoffer style={{border: "1px solid #d1d1d1"}}>
            <CardTitle>Christmas plus</CardTitle>
            <CardExplanation>Un suivi psychologique pour votre enfant avec des fonctions avancés pour sa réussite scolaire et personnelle.</CardExplanation>
            <CardPrice><SpanPrice>24,99€</SpanPrice> /mois</CardPrice>
        </Cardoffer>
    )
}

export default CardOffer
import styled from "styled-components"
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Cardoffer = styled.article`
@media only screen and (min-width: 425px) {
    width: 350px;
    height: 450px;
    border-radius: 20px;
    padding: 20px;
    margin: 20px;
    position: relative;
}
@media only screen and (max-width: 424px) {
    width: 270px;
    height: 450px;
    border-radius: 20px;
    padding: 20px;
    margin: 20px;
    position: relative;
}
`

const CardTitle = styled.h3`
    color: #ed4545;
    font-weight: 1000;
    margin-top: 0px;
`

const CardExplanation = styled.div`
    color: #666666;
`

const CardPrice = styled.div`
    margin-top: 30px;
    color: #666666;
`

const SpanPrice = styled.span`
    color: black;
    font-weight: 800;
    font-size: 50px;
`

const CardButon = styled(Link)`
    width: 100%;
    height: 30px;
    background-color: #ed4545;
    text-decoration: none;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    border-radius: 10px; 
    margin-top: 20px;
    margin-bottom: 20px;
    :hover {
        background-color: #c43b3b;
    }
`
const CardDetail = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 5px;
    margin-bottom: 5px;
`

const CardAds = styled.div`
    position: absolute;
    top: 0px;
    left: 50%;
    transform-origin: 50% 50%;
    transform: translate(-50%, -50%);
    background-color: #ed4545;
    width: 150px;
    height: 25px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-radius: 100px;
    color: white;
    font-weight: 800;
`

function CardOffer(props) {
    return (
        <Cardoffer style={{border: props.border}}>
            <CardTitle>Christmas {props.subscription}</CardTitle>
            <CardExplanation>{props.explanation}</CardExplanation>
            <CardPrice><SpanPrice>{props.price}</SpanPrice>&nbsp;&nbsp;/mois</CardPrice>
            <CardButon to="*">Sélectionner Christmas {props.subscription}</CardButon>
            <CardDetail style={{backgroundColor: "#d6d4d4"}}><FontAwesomeIcon style={{color: props.bgicon1, margin: "10px"}} icon={props.icon1}/>{props.text1}</CardDetail>
            <CardDetail style={{backgroundColor: "white"}}><FontAwesomeIcon style={{color: props.bgicon2, margin: "10px"}} icon={props.icon2}/>{props.text2}</CardDetail>
            <CardDetail style={{backgroundColor: "#d6d4d4"}}><FontAwesomeIcon style={{color: props.bgicon3, margin: "10px"}} icon={props.icon3}/>{props.text3}</CardDetail>
            <CardDetail style={{backgroundColor: "#white"}}><FontAwesomeIcon style={{color: props.bgicon4, margin: "10px"}} icon={props.icon4}/>{props.text4}</CardDetail>
            <CardDetail style={{backgroundColor: props.bg}}><FontAwesomeIcon style={{color: props.bgicon5, margin: "10px"}} icon={props.icon5}/>{props.text5}</CardDetail>
            <CardDetail style={{backgroundColor: "#white"}}><FontAwesomeIcon style={{color: props.bgicon6, margin: "10px"}} icon={props.icon6}/>{props.text6}</CardDetail>
            <CardAds style={{display: props.ads}}><FontAwesomeIcon style={{margin: "10px", fontSize: "12px"}} icon={props.icon7}/>Recommandé</CardAds>
        </Cardoffer>
    )
}

export default CardOffer
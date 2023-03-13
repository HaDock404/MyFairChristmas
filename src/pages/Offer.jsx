import styled from "styled-components"

import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faGift, faHandshake, faMountain, faMusic, faPhone, faStar, faUser } from '@fortawesome/free-solid-svg-icons'

import CardOffer from "../components/CardOffer"

const PageGlobalOffer = styled.article`
@media only screen and (min-width: 768px) {
    width: 100%;
    height: auto;
    min-height: calc(100vh - 200px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
@media only screen and (max-width: 767px) {
    width: 100%;
    height: auto;
    min-height: calc(100vh - 200px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`

const PageOffer = styled.section`
@media only screen and (min-width: 768px) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
@media only screen and (max-width: 767px) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
}
`

const CardTitle = styled.h3`
    width: 100%;
    max-width: 1000px;
    color: grey;
    font-size: 50px;
    text-align: center;
    margin-bottom: 20px;
`

function Offer() {
    return (
        <PageGlobalOffer>
            <CardTitle>
                Nos offres
            </CardTitle>
            <PageOffer>
                <CardOffer 
                    border="1px solid #d1d1d1"
                    subscription="Plus"
                    explanation="Un suivi psychologique pour votre enfant avec des fonctions avancés pour sa réussite scolaire et personnelle."
                    price="24,99€"
                    icon1={faEnvelope}
                    icon2={faGift}
                    icon3={faMusic}
                    icon4={faMountain}
                    icon5={faMountain}
                    icon6={faMusic}
                    icon7={faMusic}
                    text1="Suivi par mail journalier"
                    text2="5 cadeaux par an"
                    text3="1h de playlist méditation"
                    text4="Inscription Enfant de la Montagne"
                    ads="none"
                    bgicon1="#ed4545"
                    bgicon2="#ed4545"
                    bgicon3="#ed4545"
                    bgicon4="#ed4545"
                    bgicon5="white"
                    bgicon6="white"
                />
                <CardOffer  
                    border="2px solid #ed4545"
                    subscription="Unlimited"
                    explanation="Une écoute permanente pour que votre enfant s'épanouisse pleinement dans sa vie et sa réussite scolaire et personnelle."
                    price="98,99€"
                    icon1={faUser}
                    icon2={faPhone}
                    icon3={faGift}
                    icon4={faMountain}
                    icon5={faMusic}
                    icon6={faHandshake}
                    icon7={faStar}
                    text1="Conseiller personnalisé"
                    text2="Echange téléphonique permanent"
                    text3="Cadeau illimité"
                    text4="Inscription Enfant de la Montagne"
                    text5="5h de playlist méditation"
                    text6="Stage entreprise"
                    ads="flex"
                    bg="#d6d4d4"
                    bgicon1="#ed4545"
                    bgicon2="#ed4545"
                    bgicon3="#ed4545"
                    bgicon4="#ed4545"
                    bgicon5="#ed4545"
                    bgicon6="#ed4545"
                />
        </PageOffer>
        </PageGlobalOffer>
        
    )
}

export default Offer
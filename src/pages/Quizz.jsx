import styled from "styled-components"

import Card from "../components/Card"

import dog from '../assets/dog.png'
import gender from '../assets/hommefemme.png'
import island from '../assets/island.jpeg'
import knife from '../assets/knife.png'
import family from '../assets/family.png'
import train from '../assets/train.jpeg'

const CardArticle = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: calc(100vh - 100px);
`

const CardTitle = styled.h2`
    border: 4px solid red;
    padding: 20px;
    color: red;
    font-size: 40px;
`

const CardForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CardGrid = styled.section`
    width: 100%;
    max-width: 1000px;
    display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 20px;
	grid-row-gap: 20px;
    justify-items: center;    
`

const CardButton = styled.button`
    min-width: 200px;
    min-height: 50px;
    margin: 50px;
    background-color: grey;
    border: none;
    border-radius: 15px;
    color: white;
    font-weight: 1000;
    padding: 20px;
`

function Quizz() {
    return (
        <CardArticle>
            <CardTitle>Cochez la réponse qui correspond le mieux à l'enfant. Répondez rapidement et honnêtement.</CardTitle>
            <CardForm onSubmit={()=>console.log("ok")}>
                <CardGrid>
                    <Card picture={gender} name="gender" value1="0" value2="0" value3="0" label1="Géométrie" label2="Genre" label3="Vaisselle"/>
                    <Card picture={island} name="island" value1="0" value2="0" value3="0" label1="Fuite" label2="Solitude" label3="Télé-réalité"/>
                    <Card picture={dog} name="animal" value1="0" value2="0" value3="0" label1="Compagnon" label2="Urine" label3="Amant"/>
                    <Card picture={knife} name="knife" value1="0" value2="0" value3="0" label1="Solution" label2="Danger" label3="Sushis"/>
                    <Card picture={family} name="family" value1="0" value2="0" value3="0" label1="Mort" label2="Rêve" label3="Crainte"/>
                    <Card picture={train} name="family" value1="0" value2="0" value3="0" label1="Confiance" label2="Désespoir" label3="Vacances"/>
                </CardGrid>
                
                <CardButton type="submit">Valider votre réponse en cliquant ICI</CardButton>
            </CardForm>
        </CardArticle>
        
        
    )
}

export default Quizz
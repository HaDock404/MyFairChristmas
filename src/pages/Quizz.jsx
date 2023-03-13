import styled from "styled-components"

import Card from "../components/Card"

import dog from '../assets/dog.png'
import gender from '../assets/hommefemme.png'
import island from '../assets/island.jpeg'
import knife from '../assets/knife.png'
import family from '../assets/family.png'
import train from '../assets/train.jpeg'

import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom'

const CardArticle = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: calc(100vh - 100px);
`

const CardTitle = styled.h2`
@media only screen and (min-width: 768px) {
    border: 4px solid red;
    padding: 20px;
    color: red;
    font-size: 40px;
    text-align: center;
}
@media only screen and (max-width: 767px) {
    border: 4px solid red;
    padding: 20px;
    color: red;
    font-size: 20px;
    text-align: center;
}
`

const CardForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CardGrid = styled.section`
@media only screen and (min-width: 768px) {
    width: 100%;
    max-width: 1000px;
    display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 20px;
	grid-row-gap: 20px;
    justify-items: center;   
}
@media only screen and (max-width: 767px) {
    width: 100%;
    max-width: 1000px;
    display: grid;
	grid-template-columns: 1fr;
	grid-column-gap: 20px;
	grid-row-gap: 20px;
    justify-items: center;   
} 
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
    cursor: pointer;
    :hover {
        background-color: #42f560;
    }
`

function Quizz() {

    const [sum, setSum] = useState(0)
    const [submit, setSubmit] = useState(false)
    const [value, setValue] = useState({ gender: 0, island: 0, animal: 0, knife: 0, family: 0, train: 0})

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

     const navigate = useNavigate();

    function Submit(e) {
        e.preventDefault()
        setSubmit(true)
        setSum(sum + value.gender + value.island + value.animal + value.knife + value.family + value.train)
    }

    useEffect(()=>{
        if(submit) {
            return navigate(`/resultat?iq=${sum}`)
        }
    },[sum] )
    
    console.log(value)
    
    return (
        <CardArticle>
            <CardTitle>Cochez la réponse qui correspond le mieux à l'enfant. Répondez rapidement et honnêtement.</CardTitle>
            <CardForm onSubmit={Submit}>
                <CardGrid>
                    <Card picture={gender} id="test" name="gender" value1={0} value2={10} value3={5} label1="Géométrie" label2="Genre" label3="Vaisselle" onChange={(e)=> setValue(value =>({...value, ...{gender: parseInt(e.target.defaultValue)}}))}/>
                    <Card picture={island} name="island" value1={5} value2={10} value3={0} label1="Fuite" label2="Solitude" label3="Télé-réalité" onChange={(e)=> setValue(value =>({...value, ...{island: parseInt(e.target.defaultValue)}}))}/>
                    <Card picture={dog} name="animal" value1={10} value2={5} value3={0} label1="Compagnon" label2="Urine" label3="Amant" onChange={(e)=> setValue(value =>({...value, ...{animal: parseInt(e.target.defaultValue)}}))}/>
                    <Card picture={knife} name="knife" value1={5} value2={10} value3={0} label1="Solution" label2="Danger" label3="Sushis" onChange={(e)=> setValue(value =>({...value, ...{knife: parseInt(e.target.defaultValue)}}))}/>
                    <Card picture={family} name="family" value1={5} value2={10} value3={0} label1="Mort" label2="Rêve" label3="Crainte" onChange={(e)=> setValue(value =>({...value, ...{family: parseInt(e.target.defaultValue)}}))}/>
                    <Card picture={train} name="train" value1={0} value2={5} value3={10} label1="Confiance" label2="Désespoir" label3="Vacances" onChange={(e)=> setValue(value =>({...value, ...{train: parseInt(e.target.defaultValue)}}))}/>
                </CardGrid>
                
                <CardButton type="submit">Valider votre réponse en cliquant ICI</CardButton>
            </CardForm>
        </CardArticle>
        
        
    )
}

export default Quizz
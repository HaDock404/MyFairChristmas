import styled from "styled-components"

import dog from '../assets/dog.png'

const CardTest = styled.article`
    width: 350px;
    height: 200px;
    background-color: #dbdbdb;
    border-radius: 20px;
    box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.2);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const CardBoxImg = styled.div`
    width: 40%;
    height: auto;
    padding: 10px;
    display: flex; 
    flex-direction: row;
    justify-content: center;
`

const CardBoxRadio = styled.div`
    width: 60%;
    height: auto;
    display: flex;
    flex-direction: column;
`

const CardImg = styled.img`
    width: 100px;
    height: 100px;    
`

const CardLabel = styled.label`
    margin: 10px;
    font-weight: bold;
`

const CardInput = styled.input`
    margin: 5px;
`

function Card(props) {
    return (
        <CardTest id={props.id} onChange={props.onChange}>
            <CardBoxImg>
                <CardImg src={props.picture}/>
            </CardBoxImg>
            <CardBoxRadio>
                <CardLabel>
                    <CardInput type="radio" name={props.name} value={props.value1} required/>
                    {props.label1}
                </CardLabel>
                <CardLabel>
                    <CardInput type="radio" name={props.name}value={props.value2}/>
                    {props.label2}
                </CardLabel>
                <CardLabel>
                    <CardInput type="radio" name={props.name} value={props.value3}/>
                    {props.label3}
                </CardLabel>
            </CardBoxRadio>
        </CardTest>
    )
}

export default Card
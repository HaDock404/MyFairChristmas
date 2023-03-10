import styled from "styled-components"
import { Link } from "react-router-dom"

const CardHome = styled.article`
    width: 100%;
    height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const CardSectionQuote = styled.section`
    position: relative;
    padding-left: 20px;
    padding-right: 20px;
    width: 70%;
`

const CardQuote = styled.h3`
@media only screen and (min-width: 768px) {
    font-family: 'Dancing Script', cursive;
    font-size: 60px;
    color: grey;
    text-align: center;
}
@media only screen and (max-width: 767px) {
    font-family: 'Dancing Script', cursive;
    font-size: 40px;
    color: grey;
    text-align: center;
}
`

const CardAuthor = styled.h5`
    position: absolute;
    bottom: 10px;
    right: 0px;
    color: grey;
`

const CardSentence = styled.h3`
@media only screen and (min-width: 768px) {
    font-size: 60px;
    color: rgba(255,32,20,1);
    text-align: center;
    font-family: 'Arima', cursive;
}
@media only screen and (max-width: 767px) {
    font-size: 40px;
    color: rgba(255,32,20,1);
    text-align: center;
    font-family: 'Arima', cursive;
}
`

const CardButon = styled(Link)`
@media only screen and (min-width: 768px) {
    width: 200px;
    height: 50px;
    background-color: red;
    text-decoration: none;
    color: white;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    border-radius: 16px; 
    box-shadow: 2px 5px 16px 0px #0B325E;
    margin-bottom: 30px;
    :hover {
        box-shadow: 4px 8px 18px 0px #0B325E;
        background-color: #bd0404;
    }
}
@media only screen and (max-width: 767px) {
    width: 150px;
    height: 30px;
    background-color: red;
    text-decoration: none;
    color: white;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    border-radius: 16px; 
    box-shadow: 2px 5px 16px 0px #0B325E;
    margin-bottom: 30px;
    :hover {
        box-shadow: 4px 8px 18px 0px #0B325E;
        background-color: #bd0404;
    }
}
`

function Home() {
    return (
        <CardHome>
            <CardSectionQuote>
                <CardQuote>&ldquo;Noel est une f??te, on r??compense les gens que l'on aime par des cadeaux.&rdquo;</CardQuote>
                <CardAuthor>Kim Jong-Un</CardAuthor>
            </CardSectionQuote>
            <CardSentence>Mais, votre neveu, vos enfants, vos petits enfants, m??ritent-ils vraiment leurs cadeaux cette ann??e ?</CardSentence>
            <CardButon to="/offre">Nos offres</CardButon>
        </CardHome>
    )
}

export default Home
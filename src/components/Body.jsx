import styled from "styled-components"
import { Link } from "react-router-dom"

const CardArticle = styled.article`
    width: auto;
    height: auto;
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,32,20,1) 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
    padding-bottom: 100px;
`

const CardSection = styled.section`
    width: 80%;
    height: auto;
    background-color: #D8D8D8;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CardSectionIntro = styled.section`
@media only screen and (min-width: 1200px) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
@media only screen and (max-width: 1199px) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
`

const CardIntro = styled.h3`
@media only screen and (min-width: 1200px) {
    text-align: center;
    color: #686868;
    font-size: 40px;
    font-weight: bold;
    width: 40%;
    padding: 30px;
}
@media only screen and (max-width: 1199px) {
    text-align: center;
    color: #686868;
    font-size: 20px;
    font-weight: bold;
    width: 90%;
    padding: 10px;
}
`

const CardExplanation = styled.div`
@media only screen and (min-width: 1200px) {
    width: 60%;
    font-size: 30px;
    padding: 50px;
    color: grey;
}
@media only screen and (max-width: 1199px) {
    width: 90%;
    font-size: 16px;
    padding: 10px;
    color: grey;
}
`

const CardMotivation = styled.h3`
@media only screen and (min-width: 768px) {
    color: red;
    font-size: 2rem;
    text-decoration: underline;
    font-size: 60px;
    margin: 0px;
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
}
@media only screen and (max-width: 767px) {
    color: red;
    font-size: 2rem;
    text-decoration: underline;
    font-size: 30px;
    margin: 0px;
    text-align: center;
    margin-left: 10px;
    margin-right: 10px;
}
`

const CardMotivationLink = styled(Link)`
@media only screen and (min-width: 768px) {
    background-color: red;
    text-align: center;
    text-shadow: 5px 5px 15px white;
    font-weight: 1000;
    margin: 30px;
    color: white;
    padding: 20px;
    font-size: 40px;
}
@media only screen and (max-width: 767px) {
    background-color: red;
    text-align: center;
    text-shadow: 5px 5px 15px white;
    font-weight: 1000;
    margin: 30px;
    color: white;
    padding: 20px;
    font-size: 20px;
}
`

const CardStrong = styled.strong`
@media only screen and (min-width: 768px) {
    font-size: 60px;
}
@media only screen and (max-width: 767px) {
    font-size: 30px;
}
`

function Body() {
    return (
        <CardArticle>
            <CardSection>
                <CardSectionIntro>
                    <CardIntro>
                        Vous trouvez cela sadique ? <br/> D??trompez vous. <br/> Nous ne faisons qu'embrasser la v??rit?? et affronter le d??ni. <br/>Reveillez vous !! <br/>Ils ne sont pas aussi ang??lique que vous le pensez.
                    </CardIntro>
                    <CardExplanation>
                        Ces d??claration sont des exemples de la pens??e positive la plus positive qui soit. Une double positivit??. Et deux ??l??ments positifs en donnent un troisi??me, sur le plan math??matique comme sur le plan spirituel. La positivit?? devient triple.<br/>Nous sommes nos propres prisons. Nos propres ge??liers. Votre ??me est une ??meute de prison. Vous avez toujours l'impression de vous faire poignarder, de trouver du verre broy?? dans votre nourriture; Nous sommes ?? court d'analogies en rapport avec la prison. Nous avons pr??f??r?? ??viter celle des douches par souci d'originalit??. <br/> Croire en autre chose que vous m??me est un m??canisme d??fensif qui vous emp??che de vivre pleinement. Les enfants ne sont pas votre futur mais votre pass??, qui vous ram??ne inexorablement ?? votre propre enfance et ?? vos r??ves irr??alis??s. Vous seul contr??lez votre destin. Soumettez votre moi ?? votre volont??. <br/>Devenez le conducteur du train de votre avenir et jetez le charbon dans le feu de votre vie. Embrassez le th??me de la locomotive. Priez ?? l'autel de votre moi. D??couvrez le divin qui sommeil en vous.<br/><br/>
                        Lisez le texte ci-dessus. Relisez-le, puis appelez un ami et discutez-en. Ces lignes pourraient ??tre les plus importantes que vous ayez jamais lues sur internet.
                    </CardExplanation>
                </CardSectionIntro>
                <CardMotivation>Analyse de Puret?? Gratuite</CardMotivation>
                <CardMotivationLink to="/positionnement">
                    D??couvrez-le par vous m??me. <br/>D??couvrez votre prog??niture. <br/>Avez-vous cinq minutes ?? nous consacrez pour une vie enti??re d'??panouissement ?<br/><br/> <CardStrong>Cliquez-ici</CardStrong>
                </CardMotivationLink>
            </CardSection>
        </CardArticle>
    )
}

export default Body
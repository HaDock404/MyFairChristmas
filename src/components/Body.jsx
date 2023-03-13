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
                        Vous trouvez cela sadique ? <br/> Détrompez vous. <br/> Nous ne faisons qu'embrasser la vérité et affronter le déni. <br/>Reveillez vous !! <br/>Ils ne sont pas aussi angélique que vous le pensez.
                    </CardIntro>
                    <CardExplanation>
                        Ces déclaration sont des exemples de la pensée positive la plus positive qui soit. Une double positivité. Et deux éléments positifs en donnent un troisième, sur le plan mathématique comme sur le plan spirituel. La positivité devient triple.<br/>Nous sommes nos propres prisons. Nos propres geôliers. Votre âme est une émeute de prison. Vous avez toujours l'impression de vous faire poignarder, de trouver du verre broyé dans votre nourriture; Nous sommes à court d'analogies en rapport avec la prison. Nous avons préféré éviter celle des douches par souci d'originalité. <br/> Croire en autre chose que vous même est un mécanisme défensif qui vous empêche de vivre pleinement. Les enfants ne sont pas votre futur mais votre passé, qui vous ramène inexorablement à votre propre enfance et à vos rêves irréalisés. Vous seul contrôlez votre destin. Soumettez votre moi à votre volonté. <br/>Devenez le conducteur du train de votre avenir et jetez le charbon dans le feu de votre vie. Embrassez le thème de la locomotive. Priez à l'autel de votre moi. Découvrez le divin qui sommeil en vous.<br/><br/>
                        Lisez le texte ci-dessus. Relisez-le, puis appelez un ami et discutez-en. Ces lignes pourraient être les plus importantes que vous ayez jamais lues sur internet.
                    </CardExplanation>
                </CardSectionIntro>
                <CardMotivation>Analyse de Pureté Gratuite</CardMotivation>
                <CardMotivationLink to="/positionnement">
                    Découvrez-le par vous même. <br/>Découvrez votre progéniture. <br/>Avez-vous cinq minutes à nous consacrez pour une vie entière d'épanouissement ?<br/><br/> <CardStrong>Cliquez-ici</CardStrong>
                </CardMotivationLink>
            </CardSection>
        </CardArticle>
    )
}

export default Body
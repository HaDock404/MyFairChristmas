import styled from "styled-components"

import kid from "../assets/enfant.jpg"

const CardArticle = styled.article`
    width: auto;
    height: auto;
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

const CardTitle = styled.h2`
@media only screen and (min-width: 768px) {
    text-align: center;
    color: rgba(255,32,20,1);
    font-size: 50px;
}
@media only screen and (max-width: 767px) {
    text-align: center;
    color: rgba(255,32,20,1);
    font-size: 30px;
}
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
    align-items: space-between;
    justify-content: center;
}
`

const CardBlockImg = styled.div`
@media only screen and (min-width: 1200px) {
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 30px;
}
@media only screen and (max-width: 1199px) {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
`

const CardImg = styled.img`
    width: 100%;
    text-align: center;
`

const CardSentence = styled.div`
@media only screen and (min-width: 1200px) {
    margin: 30px;
    width: 50%;
    height: auto;
    font-size: 30px;
    color: grey;
}
@media only screen and (max-width: 1199px) {
    text-align: center;
    width: 100%;
    height: auto;
    font-size: 16px;
    color: grey;
}
`

const CardMotivation = styled.div`
@media only screen and (min-width: 768px) {
    color: red;
    text-align: center;
    font-size: 50px;
    text-decoration: underline;
    font-weight: 1000;
}
@media only screen and (max-width: 767px) {
    color: red;
    text-align: center;
    font-size: 30px;
    text-decoration: underline;
    font-weight: 1000;
}
`

const CardLegal = styled.div`
@media only screen and (min-width: 768px) {
    line-height: 10px;
    width: 80%;
    margin: 30px;
    text-align: center;
    font-size: 10px;
}
@media only screen and (max-width: 767px) {
    line-height: 6px;
    width: 80%;
    margin: 30px;
    text-align: center;
    font-size: 6px;
}
`

function Bodybis() {
    return (
        <CardArticle>
            <CardSection>
                <CardTitle>Activation ADN par t??l??phone <br/> Offre sp??ciale : 49,99???</CardTitle>
                <CardSectionIntro>
                    <CardBlockImg>
                        <CardImg src={kid}/>
                    </CardBlockImg>
                    <CardSentence> 
                        <div style={{padding:"10px"}}>
                            Vous voulez que vos enfances retrouvent leur innocence pass??, augmenter leur QI, am??liorer leurs performances sportives, augmenter leur salaire, qu'ils quittent la maison ou encore qu'ils rajeunissent ? Tout cela sans effort ? Un coup de fil suffit. <br/>Contrairement ?? ce que pr??tendent les "scientifiques", l'ADN n'est pas form?? de deux brins. <br/>Tout acupuncteur digne de ce nom vous dira qu'il existe dix autres brins, en sommeil dans le corps humain depuis des si??cles. Con??ue par des professionnels de la m??decine et du yoga, notre compilation audio brevet??e (guitare acoustique combin??e ?? des bruits de fax) synchronisera leurs ondes c??r??brales et activera leurs douzes brins d'ADN afin de r??tablir leur ??quilibre physiologique, lib??rer les motifs ??motionnels pi??g??s dans l'organisme, expulser les toxines et maladies des organes et pr??parer le corps et l'??me pour la prochaine phase d'??volution sur cette plan??te et au-del??.
                        </div>
                    </CardSentence>
                </CardSectionIntro>
                <CardMotivation>C'est la v??rit??.</CardMotivation>
                <CardLegal>
                    Nos collaborateurs travaillent sur l'am??lioration continue de nos outils de bien ??tre. Nous ne pourrons ??tre tenue pour responsable en cas d'irruption de trouble, psychique, suicidaire, d'??ruption cutan?? ou de quelconque d??sagr??ment. Nos prestations ne sont pas responsable. Nos prestations ne respectent aucune r??gle de m??decine traditionnelle. Nous sommes des charlatans.
                </CardLegal>
            </CardSection>
        </CardArticle>
    )
}

export default Bodybis
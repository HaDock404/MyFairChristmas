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
    text-align: center;
    color: rgba(255,32,20,1);
    font-size: 50px;
`

const CardSectionIntro = styled.section`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const CardBlockImg = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 30px;
`

const CardImg = styled.img`
    width: 100%;
    text-align: center;
`

const CardSentence = styled.div`
    margin: 30px;
    width: 50%;
    height: auto;
    font-size: 30px;
    color: grey;
`

const CardMotivation = styled.div`
    color: red;
    text-align: center;
    font-size: 50px;
    text-decoration: underline;
    font-weight: 1000;
`

const CardLegal = styled.div`
    line-height: 10px;
    width: 80%;
    margin: 30px;
    text-align: center;
    font-size: 10px;
`

function Bodybis() {
    return (
        <CardArticle>
            <CardSection>
                <CardTitle>Activation ADN par téléphone <br/> Offre spéciale : 49,99€</CardTitle>
                <CardSectionIntro>
                    <CardBlockImg>
                        <CardImg src={kid}/>
                    </CardBlockImg>
                    <CardSentence>
                        Vous voulez que vos enfances retrouvent leur innocence passé, augmenter leur QI, améliorer leurs performances sportives, augmenter leur salaire, qu'ils quittent la maison ou encore qu'ils rajeunissent ? Tout cela sans effort ? Un coup de fil suffit. <br/>Contrairement à ce que prétendent les "scientifiques", l'ADN n'est pas formé de deux brins. <br/>Tout acupuncteur digne de ce nom vous dira qu'il existe dix autres brins, en sommeil dans le corps humain depuis des siècles. Conçue par des professionnels de la médecine et du yoga, notre compilation audio brevetée (guitare acoustique combinée à des bruits de fax) synchronisera leurs ondes cérébrales et activera leurs douzes brins d'ADN afin de rétablir leur équilibre physiologique, libérer les motifs émotionnels piégés dans l'organisme, expulser les toxines et maladies des organes et préparer le corps et l'âme pour la prochaine phase d'évolution sur cette planète et au-delà.
                    </CardSentence>
                </CardSectionIntro>
                <CardMotivation>C'est la vérité.</CardMotivation>
                <CardLegal>
                    Nos collaborateurs travaillent sur l'amélioration continue de nos outils de bien être. Nous ne pourrons être tenue pour responsable en cas d'irruption de trouble, psychique, suicidaire, d'éruption cutané ou de quelconque désagrément. Nos prestations ne sont pas responsable. Nos prestations ne respectent aucune règle de médecine traditionnelle. Nous sommes des charlatans.
                </CardLegal>
            </CardSection>
        </CardArticle>
    )
}

export default Bodybis
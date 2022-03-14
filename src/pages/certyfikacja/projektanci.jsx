import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { Layout } from '../../components';
import { heroText } from '../../constants/heroContent';

export default function Projektanci({ data }) {
    const heroImage = getImage(data.heroImage);
    return (
        <Layout
            heroTextContent={heroText.certyfikacjaProjektanci}
            heroBackgroundImage={heroImage}
            heroClass={'hero__subpage'}
        >
            <section className="layout-content">
                <strong>Certyfikowany Projektant \ Doradca Budownictwa Pasywnego</strong>
                <p>
                    <a href="https://service.passivehouse.com/de/profis/planerkarte">
                        Zobacz mapę wszystkich certyfikowanych projektantów.
                    </a>
                    Aby nowe budynki dzisiaj mogły być tak zaprojektowane, żeby spożywały tylko
                    ułamekenergii, tak jak to dotychczas zwykle było – nie muszą już być sprawdzane.
                    Tymczasem ilość budowanych w Europie budynków pasywnych oscyluje już wokół
                    pięciocyfrowych liczb. Domy pasywne to budynki, których zużycie energii
                    grzewczej tylko w przybliżeniu wynosi jedną dziesiątą w porównaniu do średnich
                    budynków. Wymagania jakościowe standardów budownictwa pasywnego są od dawna
                    ustalone. Wszelkie takie wymagania są publikowane i dostępne w Internecie.
                    Ponadto istnieją projektowe narzędzia pomocnicze takie jak Pakiet Planowania
                    Budynku Pasywnego (PHPP) i informacje, takie jak Passipedia. Wszystko to nie
                    zastępuje architekta - ale sprawia, że jego życie jest łatwiejsze. Niezbędną
                    wiedzę mogą uzyskać planiści i projektanci podczas szkoleń i seminariów.
                    Istnieje wiele różnych ofert dostępnych kursów. Inna forma szkolenia wykracza
                    poza praktyczne zastosowanie. Architekt, który zaprojektował i zbudował
                    certyfikowany dom pasywny, ma bez wątpienia niezbędne know-how. Certyfikat
                    pokazuje klientowi, że jego planista lub doradca uzyskał wiedzę i doświadczenie
                    w zakresie planowania i doradztwa przy projektach budynków pasywnych.
                    Certyfikowanego Projektanta Budownictwa Pasywnego nie należy mylić z
                    akredytowanymi organami certyfikującymi budynki poprzez "Certyfikat budynku
                    pasywnego". Tutaj znajduje się więcej informacji na temat Certyfikowanego
                    Projektanta/Doradcy Budownictwa Pasywnego. Tutaj znajdują się certyfikowani
                    Projektanci/Doradcy Budownictwa Pasywnego. Wyszukaj certyfikowanych projektantów
                    - http://passivhausplaner.eu/mitgliederdatenbank.php
                </p>
            </section>
        </Layout>
    );
}

export const pageQuery = graphql`
    query CertQuery4 {
        heroImage: file(relativePath: { eq: "heroImages/hero_certification.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 1900)
            }
        }
    }
`;

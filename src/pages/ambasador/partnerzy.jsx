import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { Button, Layout } from '../../components';
import { heroText } from '../../constants/heroContent';

import './Ambassador.scss';

export default function Partnerzy({ data }) {
    const heroImage = getImage(data.heroImage);
    return (
        <Layout
            heroTextContent={heroText.ambassadorText}
            heroBackgroundImage={heroImage}
            heroClass={'hero__subpage'}
        >
            <section className="layout-content">
                <h2>Partnerzy</h2>
                <div>
                    <p>
                        Poniżej w formie tabeli podzielonej na kilka kategorii prezentowane są
                        właśnie firmy popierające budownictwo pasywne przez rozwój produkcji,
                        wprowadzanie nowych energooszczędnych komponentów i materiałów budowlanych,
                        badania naukowe, finansowanie przedsięwzięć mających na celu ograniczenie
                        zużycia energii, a także jej racjonalne pozyskiwanie i wykorzystanie oraz
                        inne działalności. Otrzymały one tytuł Ambasadora Budownictwa Pasywnego, co
                        zobowiązuje je do zachowania najwyższych standardów oraz do popularyzacji i
                        promocji najbardziej efektywnych i ekonomicznych rozwiązań w budownictwie.
                        Firmy te mają w swojej ofercie produkty, które z powodzeniem można
                        wykorzystać podczas realizacji budynku pasywnego. Na szczególną uwagę
                        zasługują te wyroby, które posiadają certyfikat wydany przez Passivhaus
                        Institut Darmstadt potwierdzający ich wysoką jakość.
                        <br />
                        Koordynator grupy Ambasador Budownictwa Pasywnego ze strony PIBPiEO: Łukasz
                        Krzysztoń, l.krzyszton@pibp.pl, tel. +48 (058) 5240-12-01
                        <br />
                        *Wymagania wysokiej jakości dla standardu budownictwa pasywnego istnieją
                        wiele lat. Zawsze aktualne kryteria budownictwa pasywnego są opublikowane i
                        swobodnie dostepne w internecie. Te wymagania, które powinny spełniać
                        budynki pasywne są dostępne w pakiecie do projektowania budynków pasywnych
                        (PHPP) oraz w powrzechnie dostępnej interentowej encyklopedii – PASSIPEDIA .
                    </p>
                </div>

                <Button textContent={'Ambasador button'} />
            </section>
        </Layout>
    );
}

export const pageQuery = graphql`
    query AmbQuery1 {
        heroImage: file(relativePath: { eq: "heroImages/hero_ambassador.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 1900)
            }
        }
    }
`;

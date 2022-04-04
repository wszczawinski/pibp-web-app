import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { Layout } from '../../components';
import { heroText } from '../../constants/heroContent';
import { ambassadors } from '../../constants/ambassadors';
import listaAmbasadorow from '../../images/lista_ambasadorow.png';

import './Ambassador.scss';

export default function Ambassador({ data }) {
    const heroImage = getImage(data.heroImage);
    console.log(ambassadors);
    return (
        <Layout
            heroTextContent={heroText.ambassador}
            heroBackgroundImage={heroImage}
            heroClass={'hero__subpage'}
        >
            <section className="layout-content">
                <div className="ambasador__main-container">
                    <Link to="/ambasadorzy/lista-ambasadorow">
                        <img src={listaAmbasadorow} alt="" />
                        Lista ambasadorów
                    </Link>
                    <Link to="/ambasadorzy/formularz">Formularz</Link>
                </div>
            </section>
        </Layout>
    );
}

export const pageQuery = graphql`
    query AmbQuery {
        heroImage: file(relativePath: { eq: "heroImages/hero_ambassador.png" }) {
            childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 2600)
            }
        }
    }
`;

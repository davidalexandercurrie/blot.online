import * as React from 'react';
import Layout from '../components/layout';
import Nav from '../components/nav';
import { homeImage, homeImageContainer } from '../styles/Layout.module.css';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  console.log(`it's very late i need to sleep`);
  return (
    <Layout
      root={true}
      headerText="BLOT: a journal for music, sound, and performance in Aotearoa"
    >
      <Nav />
      <div className={homeImageContainer}>
        {/* <StaticImage
          className={homeImage}
          src="../images/instagram-launch.png"
          width={640}
          height={640}
          placeholder="none"
          alt="Advertisement for the Blot Launch party"
        /> */}
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Blot: Home</title>;

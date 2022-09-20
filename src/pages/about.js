import * as React from 'react';
import Layout from '../components/layout';
import {
  pageContainer,
  pageTitle,
  noBulletList,
  pageP,
  supportP,
} from '../styles/Layout.module.css';

const about = ({ location }) => {
  return (
    <Layout location>
      <div className={pageContainer}>
        <h1 className={pageTitle}>About</h1>
        <p className={pageP}>
          BLOT is an open access online journal encompassing a variety of music,
          sound-based, and performance practices.
        </p>
        <p className={pageP}>
          BLOT is here to create space for critical discourse and documentation,
          and to foster community for art practices that deal in music, sound,
          and performance in Aotearoa. BLOT embraces perspectives across
          geography, ethnicity, and gender, and is inclusive, intersectional and
          intergenerational. BLOT is a platform for constructive conversations
          about sonic art and culture, alongside issues facing our community.
        </p>
        <p className={pageP}>
          BLOT is co-edited by Antonia Barnett McIntosh and Samuel Holloway.
        </p>
        <p className={pageP}>
          Antonia! is a composer, performer, and sound artist. She collaborates
          in cross arts spaces, gently tapping on the borders between
          speech/music, performance/rehearsal, composition/writing, and
          juxtaposing the formalities of presentation with the aesthetics of
          failure.
        </p>
        <p className={pageP}>
          Samuel: is a composer, performer, and educator. His creative work and
          research is variously concerned with: music’s paratextual language;
          ambiguous affective states, such as boredom; and the continuing
          potential of musical notation as a site for exploration.
        </p>
        <p className={pageP}>
          We are very grateful to the following for their generous support:
        </p>
        <p className={supportP}>Chartwell Trust</p>
        <p className={supportP}>John & Jo Gow</p>
        <p className={supportP}>Michael Lett & Andrew Thomas</p>
        <p className={supportP}>David Currie</p>
        <p className={supportP}>Marcus Jackson</p>
      </div>
    </Layout>
  );
};

export default about;

export const Head = () => <title>Blot: About</title>;

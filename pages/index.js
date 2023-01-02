import Contact from '../components/Contact/Contact';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import About from '../components/About/About';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <About />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Contact />
    </Layout>
  );
};

export default Home;
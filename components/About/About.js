import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";
import ReadMoreButton from "./ReadMoreButton";

const About = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          I have a strong understanding of the Unix, Linux, and Windows
          operating systems and have experience using each of them in various
          environments. I am proficient in frontend development using React and
          Nextjs, which allows me to create interactive and user-friendly web
          applications. In addition to my frontend skills,
        
          <ReadMoreButton></ReadMoreButton>
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default About;

import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey!<br />
          Myself Prateek :)
        </SectionTitle>
        <SectionText>
        I am a Full-Stack Developer with a vast array of knowledge in many different front-end and back-end languages, responsive frameworks, databases, and best code practices.        </SectionText>
        <Button onClick={()=>{window.location.href=href="https://www.linkedin.com/in/prateek-guglani-74b937188/"}}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
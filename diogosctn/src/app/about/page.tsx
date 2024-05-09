import SkillSection from '../_components/sections/skillSection/skillSection';
import CareerSection from '../_components/sections/careerSection/careerSection';
import AboutSection from '../_components/sections/aboutSection/aboutSection';

import styles from './page.module.scss'

export default function About() {

  return (
    <div className={styles.container}>
      <AboutSection></AboutSection>
      <SkillSection></SkillSection>
      <CareerSection></CareerSection>
    </div>
  )
}
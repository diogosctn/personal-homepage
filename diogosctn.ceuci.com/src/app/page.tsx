import Image from 'next/image';

import Section from './_components/section/section';
import styles from './page.module.scss'
import homeImage from "./_assets/images/home-image.svg";

export default function Home() {
  return (
    <Section className={styles.sectionComponent}>
      <>
        <div className={styles.textsContainer}>
          <h1>Full-Stack<br/>Web Developer</h1>
          <p>Full-stack web developer for 4 years writing clean,<br/>elegant and efficient code</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            priority
            src={homeImage}
            alt="Image of Diogo"
          />
        </div>
      </>
    </Section>
  )
}

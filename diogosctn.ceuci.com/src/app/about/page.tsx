import Image from 'next/image';
import Section from '../_components/section/section';
import styles from './page.module.scss'
import homeImage from "../_assets/images/home-image.svg";

export default function About() {
  return (
    <div className={styles.container}>
      <Section>
        <>
          <div className={styles.textsContainer}>
            <h1>about me</h1>
            <p>
              I am a web developer with a passion for technology and education. I hold a degree in Physics, where I acquired foundational knowledge in mathematics, logic, and science. <br/><br/>
              I work 4 years in JavaScript, AWS, Python, and Java creating comprehensive, innovative, and scalable web solutions.<br/><br/>
              I instructed students in programming, robotics, and circuits.<br/><br/>
              My goal is to blend my background in physics with my expertise in web development to create products and services that positively impact society.
            </p>
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
      <Section>
        <>
          <div className={styles.textsContainer}>
            <h1>my skills</h1>
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
      <Section>
        <>
          <div className={styles.textsContainer}>
            <h1>my career</h1>
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
    </div>
  )
}
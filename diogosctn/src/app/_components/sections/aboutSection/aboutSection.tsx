import Image from 'next/image';
import Section from '../../section/section';
import styles from './aboutSection.module.scss'
import homeImage from "../../../_assets/images/home-image.svg";
import aboutContent from '@/app/_contents/aboutContent';

export default function AboutSection() {

  return (
    <Section className={styles.aboutContainer}>
        <>
            <div className={styles.textsContainer}>
                <h1>sobre mim</h1>
                {aboutContent}
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
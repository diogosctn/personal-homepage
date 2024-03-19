import Image from 'next/image';
import githubIcon from "../_assets/icons/github-icon.svg";
import linkedinIcon from "../_assets/icons/linkedin-icon.svg";
import instagramIcon from "../_assets/icons/instagram-icon.svg";
import styles from '../page.module.scss'
import Footer from '../_components/footer/footer';
import Header from '../_components/header/header';

export default function About() {
  return (
    <main className={styles.main}>
      <Header/>
      <section className={styles.cover}>
        
      </section>
      <Footer/>
    </main>
  )
}
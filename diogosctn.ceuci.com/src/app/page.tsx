import Image from 'next/image';

import Header from './_components/header/header';
import Footer from './_components/footer/footer';
import homeImage from "./_assets/images/home-image.svg";
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <section className={styles.cover}>
        <div>
          <div>
            <h1>Full-Stack<br/>Web Developer</h1>
            <p>Full-stack web developer for 4 years writing clean,<br/>elegant and efficient code</p>
          </div>
          <div>
            <Image
              priority
              src={homeImage}
              alt="Image of Diogo"
            />
          </div>
        </div>
      </section>

      <Footer/>
    </main>
  )
}

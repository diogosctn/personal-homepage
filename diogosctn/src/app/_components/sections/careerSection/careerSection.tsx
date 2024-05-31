"use client";

import { useEffect, useRef, useState } from 'react';

import Section from '../../section/section';
import styles from './careerSection.module.scss'
import careerContent from '@/app/_contents/careerContent';

export default function CareerSection() {

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex(prevIndex => (prevIndex === careerContent.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setActiveIndex(prevIndex => (prevIndex === 0 ? careerContent.length - 1 : prevIndex - 1));
  };

  return (
      <Section containerClassName={styles.careerContainer}>
        <>
          <div className={styles.titleContainer}>
            <h1>carreira</h1>
          </div>
          <div className={
              `${styles.contentContainer}`
            }
          >
            <button 
              className={styles.prevButton} 
              onClick={prevSlide} 
              disabled={activeIndex === 0} 
              aria-label="Slide anterior">
                {'<'}
            </button>
              {careerContent.map((content, index) => (
                <div
                  key={index}
                  className={`${styles.card} ${index === activeIndex ? styles.active : ''}`}
                >
                  {content}
                </div>
              ))}
            <button 
              className={styles.nextButton} 
              onClick={nextSlide} 
              disabled={activeIndex === careerContent.length - 1} 
              aria-label="Próximo slide">
                {'>'}
              </button>
          </div>
        </>
      </Section>
  )
}
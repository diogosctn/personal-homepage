"use client";

import { useEffect, useState } from 'react';

import Section from '../../section/section';
import PieChart from '../../stackChart/stackChart';
import styles from './skillSection.module.scss'
import skillContents from '@/app/_contents/skillContent'

interface ChartDimensions {
  width: number,
  height: number,
  cx: number,
  cy: number,
  outerRadius: number
}



export default function SkillSection() {
  const initialChartDimensions = {
    width: 400,
    height: 400,
    cx: 200,
    cy: 200,
    outerRadius: 175
  }

  const activeChartDimensions = {
    width: 200,
    height: 200,
    cx: 100,
    cy: 100,
    outerRadius: 85
  }

  const [domLoaded, setDomLoaded] = useState(false);

  const [isChartActive, setIsChartActive] = useState(false);
  const [activeChartIndex, setActiveChartIndex] = useState<null|number>(null);
  const [chartDimensions, setChartDimensions] = useState<ChartDimensions>(initialChartDimensions)
  
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  
  const handleChartStateChange = (newState: null | number) => {
    const _isChartActive = newState !== null;
    setActiveChartIndex(newState);
    setIsChartActive(_isChartActive);
    setChartDimensions(_isChartActive ? {...activeChartDimensions} : {...initialChartDimensions})
  };

  return (
    <Section containerClassName={styles.skillsContainer}>
        <>
            <div className={styles.titleContainer}>
            <h1>skills</h1>
            </div>
            <div className={
            `${styles.contentContainer} ${
                !isChartActive ? styles.contentContainerInactive : styles.contentContainerActive
                }`
            }
            >
            {domLoaded && (
                <div style={!isChartActive ? {} : {maxWidth: activeChartDimensions.width}}>
                  {activeChartIndex !== null && <h3>{skillContents[activeChartIndex].name}</h3>}
                  <PieChart
                      data={skillContents}
                      {...chartDimensions}
                      onChartStateChange={handleChartStateChange}
                  />
                </div>
            )}
            {!isChartActive ? 
                <p>Clique em uma fatia do gráfico...</p>:
                <p>
                {
                    activeChartIndex !== null && skillContents[activeChartIndex].content
                }
                </p>
            }
            </div>
        </>
    </Section>
  )
}
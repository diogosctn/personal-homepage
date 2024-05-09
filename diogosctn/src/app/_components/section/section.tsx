import styles from './section.module.scss'
import { JSX } from 'react/jsx-runtime'

const Section = ({
    children,
    className,
    containerClassName
  }:{
    children?: React.ReactNode,
    className?: string,
    containerClassName?: string
  }) => {
  return (
    <section className={`${styles.cover} ${className}`}>
      <div className={containerClassName}>
        {children}
      </div>
    </section>
  )
}

export default Section;
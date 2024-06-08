import styles from './section.module.scss'
import { JSX } from 'react/jsx-runtime'

const Section = ({
    children,
    className,
    containerClassName,
    ref
  }:{
    children?: React.ReactNode,
    className?: string,
    containerClassName?: string
    ref?: any
  }) => {
  return (
    <section className={`${styles.cover} ${className}`} ref={ref}>
      <div className={containerClassName}>
        {children}
      </div>
    </section>
  )
}

export default Section;
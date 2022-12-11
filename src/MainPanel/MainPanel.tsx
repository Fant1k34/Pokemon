import React from 'react'
import styles from './MainPanel.module.css'
import { cn } from '../api/common'

interface props {
  main: string
  secondary: string
  gender: 'male' | 'female'
  className?: string
}

export const MainPanel: React.FC<props> = ({ main, secondary, gender, className }) => {
  const isFemale = gender === 'female'

  return (
        <span className={cn(className, styles.Property, isFemale && styles.Property_female)}>
            <span className={cn(styles.Property__name, isFemale && styles.Property__name_female)}>{ main }</span>
            <span className={styles.Property__value}>{ secondary }</span>
        </span>
  )
}

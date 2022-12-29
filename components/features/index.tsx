import cn from 'clsx'
import { motion } from 'framer-motion'

import styles from './style.module.css'

export function Feature({
  large,
  centered,
  children,
  lightOnly,
  className,
  ...props
}: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className={cn(
        styles.feature,
        large && styles.large,
        centered && styles.centered,
        lightOnly && styles['light-only'],
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function Features({ children }: any) {
  return <div className={styles.features}>{children}</div>
}

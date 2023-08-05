import { AnimatePresence, motion } from 'framer-motion'

type AnimationProps = React.ComponentProps<typeof motion.div>

interface ShowProps {
  when?: boolean
  children?: React.ReactNode
  fallback?: React.ReactNode
  animationProps?: AnimationProps
}

const duration = 0.35

const defaultAnimationProps: AnimationProps = {
  initial: { scale: 0.9, display: 'none' },
  exit: { scale: 0.9, display: 'none' },
  animate: { display: 'block', scale: 1 },
  transition: { duration },
}

export const Show = ({
  when,
  children,
  fallback = null,
  animationProps = defaultAnimationProps,
}: ShowProps) => (
  <AnimatePresence>
    {when ? (
      <motion.div key='true' {...animationProps}>
        {children}
      </motion.div>
    ) : (
      <motion.div key='false' {...animationProps}>
        {fallback}
      </motion.div>
    )}
  </AnimatePresence>
)

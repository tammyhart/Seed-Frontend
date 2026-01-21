import { useTransform, type MotionValue, motion } from "motion/react"

import useJourney from "@/hooks/useJourney"

import * as Styled from "./Styled"

type Scene = {
  children: React.ReactNode
  globalProgress: MotionValue<number>
  index: number
}

const Scene = ({ children, globalProgress, index }: Scene) => {
  const { state } = useJourney()
  const { sceneCount } = state

  const count = sceneCount > 0 ? sceneCount : 1

  const x = useTransform(globalProgress, val => {
    return `${(index - val * count) * 100}%`
  })

  // Temporary styling for verification
  const backgroundColor = index % 2 === 0 ? "#1a1a1a" : "#2a2a2a"

  return (
    <motion.div className={Styled.scene} style={{ x, backgroundColor }}>
      <h1>Scene {index}</h1>
      {children}
    </motion.div>
  )
}

export default Scene

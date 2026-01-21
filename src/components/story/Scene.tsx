import { useTransform, type MotionValue, motion } from "motion/react"

import useJourney from "@/hooks/useJourney"

import * as Styled from "./Styled"
import type { SceneData } from "@/data/content"

type Scene = SceneData & {
  children: React.ReactNode
  globalProgress: MotionValue<number>
  index: number
}

const Scene = ({ children, globalProgress, index, theme }: Scene) => {
  const { state } = useJourney()
  const { sceneCount } = state

  const count = sceneCount > 0 ? sceneCount : 1

  const x = useTransform(globalProgress, val => {
    return `${(index - val * count) * 100}%`
  })

  // Temporary styling for verification
  const backgrounds = {
    light: "var(--color-journey-light)",
    dark: "var(--color-primary-seed-green)",
  }

  return (
    <motion.div
      className={Styled.scene}
      style={{ x, backgroundColor: backgrounds[theme] }}
    >
      <h1>Scene {index}</h1>
      {children}
    </motion.div>
  )
}

export default Scene

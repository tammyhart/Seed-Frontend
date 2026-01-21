import { motion } from "motion/react"

import useJourney from "@/hooks/useJourney"

import Header from "@/components/interface/Header"
import Footer from "@/components/interface/Footer"
import Timeline from "@/components/interface/Timeline"
import Welcome from "@/components/interface/Welcome"

import Stage from "@/components/story/Stage"
import Scene from "@/components/story/Scene"

import JOURNEY_DATA from "./content"
import * as Styled from "./Styled"

const MotionMain = motion(Styled.Main)
const MotionViewport = motion(Styled.Viewport)

const Experience = () => {
  const { progress } = useJourney()

  const duration = 1

  return (
    <MotionMain
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration }}
    >
      <MotionViewport
        animate={{ marginBottom: "0" }}
        initial={{ marginBottom: "-6rem" }}
        transition={{ duration }}
      >
        <Styled.Primary>
          <Header />
          <Welcome />
        </Styled.Primary>

        <Timeline />

        <Stage>
          {JOURNEY_DATA.map((scene, index) => {
            const Component = scene.Component as React.ComponentType<{
              canPlay?: boolean
            }>

            return (
              <Scene
                key={scene.id}
                globalProgress={progress}
                index={index}
                {...scene}
              >
                <Component canPlay={true} />
              </Scene>
            )
          })}
        </Stage>
      </MotionViewport>

      <Footer />
    </MotionMain>
  )
}

export default Experience

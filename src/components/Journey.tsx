import useJourney from "@/hooks/useJourney"

import Header from "@/components/interface/Header"
import Footer from "@/components/interface/Footer"
import Timeline from "@/components/interface/Timeline"
import Welcome from "@/components/interface/Welcome"

import Stage from "@/components/story/Stage"
import Scene from "@/components/story/Scene"

import JOURNEY_DATA from "./content"
import * as Styled from "./Styled"

const Experience = () => {
  const { progress } = useJourney()

  return (
    <Styled.Main>
      <Styled.Viewport>
        <Styled.Primary>
          <Header />
          <Welcome />
        </Styled.Primary>

        <Timeline />

        <Stage>
          {JOURNEY_DATA.map((scene, index) => (
            <Scene
              key={scene.id}
              globalProgress={progress}
              index={index}
              {...scene}
            >
              <scene.Component />
            </Scene>
          ))}
        </Stage>
      </Styled.Viewport>

      <Footer />
    </Styled.Main>
  )
}

export default Experience

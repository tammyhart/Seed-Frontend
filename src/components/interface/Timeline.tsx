import { animate } from "motion/react"

import { JOURNEY_DATA } from "@/components/content"
import useJourney from "@/hooks/useJourney"
import * as Styled from "./Styled"

const Timeline = () => {
  const { progress, dispatch, state } = useJourney()
  const { sceneCount } = state

  const handleSeek = (index: number) => {
    dispatch({ type: "PAUSE" })
    dispatch({ type: "SET_SCENE", payload: index })

    // Safely handle potential division by zero, though unlikely with data
    const count = sceneCount > 0 ? sceneCount : 1

    animate(progress, index / count, {
      duration: 2,
      ease: "easeInOut",
    })
  }

  return (
    <Styled.Timeline>
      {JOURNEY_DATA.map((scene, index) => (
        <Styled.TimelinePoint
          key={scene.id}
          aria-label={scene.title}
          title={scene.title}
          onClick={() => handleSeek(index)}
        >
          【 {scene.title} 】
        </Styled.TimelinePoint>
      ))}
    </Styled.Timeline>
  )
}

export default Timeline

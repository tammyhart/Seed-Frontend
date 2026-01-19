import { createContext, useReducer, useEffect } from "react"
import { useMotionValue, animate, type MotionValue } from "framer-motion"

import type * as Journey from "@/types/journey"

import journeyReducer, { initialJourneyState } from "./journeyReducer"

type JourneyContextType = {
  dispatch: (action: Journey.Action) => void
  progress: MotionValue<number>
  state: Journey.State
}

const JourneyContext = createContext<JourneyContextType | null>(null)

type JourneyProvider = {
  children: React.ReactNode
  sceneCount: number
}

const JourneyProvider = ({
  children,
  sceneCount,
}: JourneyProvider): React.ReactElement => {
  const [state, dispatch] = useReducer(journeyReducer, {
    ...initialJourneyState,
    sceneCount,
  })
  const progress = useMotionValue(0)

  useEffect(() => {
    dispatch({ type: "SET_SCENE_COUNT", payload: sceneCount })
  }, [sceneCount])

  useEffect(() => {
    if (state.status === "playing") {
      const currentProgress = progress.get()
      const remainingDuration = (1 - currentProgress) * 60

      const controls = animate(progress, 1, {
        duration: remainingDuration,
        ease: "linear",
        onComplete: () => {
          dispatch({ type: "PAUSE" })
        },
      })

      return () => controls.stop()
    }
  }, [state.status, progress])

  return (
    <JourneyContext.Provider value={{ state, dispatch, progress }}>
      {children}
    </JourneyContext.Provider>
  )
}

export default JourneyProvider
export { JourneyContext }

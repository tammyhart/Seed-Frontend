import useJourney from "@/hooks/useJourney"
import useVirtualScroll from "@/hooks/useVirtualScroll"

import * as Styled from "./Styled"

type Stage = {
  children: React.ReactNode
}

const Stage = ({ children }: Stage) => {
  const { dispatch, progress } = useJourney()

  useVirtualScroll({ dispatch, progress })

  return <Styled.Stage>{children}</Styled.Stage>
}

export default Stage

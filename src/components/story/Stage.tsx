import * as Styled from "./Styled"

type Stage = {
  children: React.ReactNode
}

const Stage = ({ children }: Stage) => {
  return <Styled.Stage>{children}</Styled.Stage>
}

export default Stage

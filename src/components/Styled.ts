import { styled } from "@linaria/react"

export const Main = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`

export const Viewport = styled.div`
  flex: 1;
  position: relative;
  overflow: hidden;
  width: 100%;

  border-bottom-left-radius: var(--radius-large);
  border-bottom-right-radius: var(--radius-large);
  overflow: hidden;
`

export const Primary = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;

  display: flex;
  flex-direction: column;
  gap: var(--gap-40);
`

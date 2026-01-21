import { css } from "@linaria/core"
import { styled } from "@linaria/react"

export const Stage = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const scene = css`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  will-change: transform, opacity;
`

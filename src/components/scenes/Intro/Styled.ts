import { styled } from "@linaria/react"
import { motion } from "motion/react"

export const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`

export const VideoBackground = styled.video`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`

export const ContentWrapper = styled(motion.div)`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--gap-80);
  width: 100%;
`

export const Paragraph = styled(motion.p)`
  font-size: var(--typography-size-800);
  font-weight: var(--typography-weight-300);
  letter-spacing: -0.02em;
  line-height: 1.1;
`

export const Symbol = styled.span`
  font-size: var(--typography-size-1000);
  font-family: monospace;
  letter-spacing: -0.2em;
`

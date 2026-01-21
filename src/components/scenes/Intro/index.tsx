import { useAnimation, useInView } from "motion/react"
import { useEffect, useRef } from "react"

import { introContent } from "./content"
import * as Styled from "./Styled"

const Intro = () => {
  const containerRef = useRef(null)
  const controls = useAnimation()

  const isInViewStrict = useInView(containerRef, { amount: 0.5 })
  const isInViewLoose = useInView(containerRef, { amount: 0.01 })

  useEffect(() => {
    if (isInViewStrict) {
      controls.start("visible")
    }
  }, [isInViewStrict, controls])

  useEffect(() => {
    if (!isInViewLoose) {
      controls.start("hidden")
    }
  }, [isInViewLoose, controls])

  return (
    <Styled.Container>
      <Styled.VideoBackground
        autoPlay
        loop
        muted
        playsInline
        src="/video/timeline-loop-sm.mp4"
      />
      <Styled.ContentWrapper
        animate={controls}
        initial="hidden"
        ref={containerRef}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.4,
              delayChildren: 0.5,
            },
          },
        }}
      >
        {introContent.paragraphs.map((text, index) => (
          <Styled.Paragraph
            key={index}
            variants={{
              hidden: { opacity: 0, y: -48 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, ease: "easeOut" },
              },
            }}
          >
            {text}
          </Styled.Paragraph>
        ))}
      </Styled.ContentWrapper>
    </Styled.Container>
  )
}

export default Intro

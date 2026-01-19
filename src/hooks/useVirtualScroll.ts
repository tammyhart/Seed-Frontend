import { useEffect } from "react"
import { useWheel, useDrag } from "@use-gesture/react"
import { type MotionValue } from "framer-motion"
import type * as Journey from "@/types/journey"

const SCROLL_SENSITIVITY = 0.0005

type UseVirtualScroll = {
  dispatch: (action: Journey.Action) => void
  progress: MotionValue<number>
}

const useVirtualScroll = ({ dispatch, progress }: UseVirtualScroll): void => {
  useEffect(() => {
    const preventDefault = (e: Event) => e.preventDefault()
    document.addEventListener("wheel", preventDefault, { passive: false })
    document.addEventListener("touchmove", preventDefault, { passive: false })

    return () => {
      document.removeEventListener("wheel", preventDefault)
      document.removeEventListener("touchmove", preventDefault)
    }
  }, [])

  useWheel(
    ({ delta: [, dy], active }) => {
      if (active) {
        dispatch({ type: "PAUSE" })
        const current = progress.get()
        const next = Math.min(1, Math.max(0, current + dy * SCROLL_SENSITIVITY))
        progress.set(next)
      }
    },
    {
      target: typeof window !== "undefined" ? window : undefined,
      eventOptions: { passive: false },
    },
  )

  useDrag(
    ({ delta: [, dy], active }) => {
      if (active) {
        dispatch({ type: "PAUSE" })
        const current = progress.get()
        // Drag up (negative dy) means scroll down (increase progress)
        const next = Math.min(1, Math.max(0, current - dy * SCROLL_SENSITIVITY))
        progress.set(next)
      }
    },
    {
      target: typeof window !== "undefined" ? window : undefined,
      eventOptions: { passive: false },
    },
  )
}

export default useVirtualScroll

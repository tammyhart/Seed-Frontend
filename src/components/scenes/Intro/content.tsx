import * as Styled from "./Styled"

const getTodayString = (): React.ReactNode => {
  const date = new Date()
  const day = date.getDate()
  const month = date.toLocaleString("en-US", { month: "long" })

  const getSuffix = (d: number): string => {
    if (d > 3 && d < 21) return "th"
    switch (d % 10) {
      case 1:
        return "st"
      case 2:
        return "nd"
      case 3:
        return "rd"
      default:
        return "th"
    }
  }

  return (
    <>
      It&apos;s the {day}
      <sup>{getSuffix(day)}</sup>
      <br />
      of {month}.
    </>
  )
}

// const START_DATE = new Date("2026-01-20") // "And your path begins Now" (0 days)
// const START_DATE = new Date("2026-01-15") // "And you are settling In" (5 days)
// const START_DATE = new Date("2026-01-01") // "And new habits are Forming" (19 days)
// const START_DATE = new Date("2025-11-01") // "And consistency is the Key" (80 days)
const START_DATE = new Date("2025-10-20") // "And results are taking Shape" (> 90 days)

const getDaysSinceStart = (): number => {
  const now = new Date()
  // Reset times to midnight to ensure we calculate day difference purely
  now.setHours(0, 0, 0, 0)
  const start = new Date(START_DATE)
  start.setHours(0, 0, 0, 0)

  const diffTime = Math.abs(now.getTime() - start.getTime())
  return Math.floor(diffTime / (1000 * 60 * 60 * 24))
}

const getDurationString = (): React.ReactNode => {
  const diffDays = getDaysSinceStart()
  const months = Math.round(diffDays / 30)

  if (months === 0) {
    return (
      <>
        You&apos;re just starting
        <br /> in this journey.
      </>
    )
  }

  return (
    <>
      You&apos;re {months} month{months === 1 ? "" : "s"}
      <br /> in this journey.
    </>
  )
}

const getStatusString = (): React.ReactNode => {
  const diffDays = getDaysSinceStart()

  let status = "And results are taking Shape"

  if (diffDays <= 1) {
    status = "And your path begins Now"
  } else if (diffDays <= 7) {
    status = "And you are settling In"
  } else if (diffDays <= 30) {
    status = "And new habits are Forming"
  } else if (diffDays < 90) {
    status = "And consistency is the Key"
  }

  const words = status.split(" ")
  const firstLine = words.slice(0, 3).join(" ")
  const remaining = words.slice(3)
  const lastWord = remaining.pop()
  const secondLine = remaining.join(" ")

  return (
    <>
      {firstLine}
      {lastWord && (
        <>
          <br />
          {secondLine} <Styled.Symbol>◖</Styled.Symbol> {lastWord}{" "}
          <Styled.Symbol>■◗</Styled.Symbol>
        </>
      )}
    </>
  )
}

export const introContent = {
  paragraphs: [getTodayString(), getDurationString(), getStatusString()],
}

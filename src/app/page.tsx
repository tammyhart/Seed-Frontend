"use client"

import JourneyProvider from "@/context/JourneyContext"

import Experience from "@/components/Experience"

import JOURNEY_DATA from "@/data/content"

const Page = (): React.ReactElement => {
  return (
    <JourneyProvider sceneCount={JOURNEY_DATA.length}>
      <Experience />
    </JourneyProvider>
  )
}

export default Page

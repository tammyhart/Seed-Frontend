"use client"

import JourneyProvider from "@/context/JourneyContext"

import Journey from "@/components/Journey"

import JOURNEY_DATA from "@/data/content"

const Page = () => {
  return (
    <JourneyProvider sceneCount={JOURNEY_DATA.length}>
      <Journey />
    </JourneyProvider>
  )
}

export default Page

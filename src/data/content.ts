export type SceneData = {
  id: string
  title: string
  theme: "light" | "dark"
}

export const JOURNEY_DATA: SceneData[] = [
  { id: "intro", title: "Travel to the Gut", theme: "dark" },
  { id: "days-1-7", title: "Days 1-7", theme: "light" },
  { id: "weeks-2-4", title: "Weeks 2-4", theme: "dark" },
]

export default JOURNEY_DATA

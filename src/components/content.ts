import Intro from "@/components/scenes/Intro"
import Days1To7 from "@/components/scenes/Days1To7"
import Weeks2To4 from "@/components/scenes/Weeks2To4"

export type SceneData = {
  id: string
  title: string
  theme: "light" | "dark"
  Component: React.ComponentType
}

export const JOURNEY_DATA: SceneData[] = [
  { id: "intro", title: "Intro", theme: "light", Component: Intro },
  {
    id: "days-1-7",
    title: "First 7 Days",
    theme: "light",
    Component: Days1To7,
  },
  {
    id: "weeks-2-4",
    title: "Weeks 2-4",
    theme: "dark",
    Component: Weeks2To4,
  },
]

export type LinkItem = {
  label: string
  href: string
}

export const HEADER_LINKS = {
  primary: [
    { label: "Shop", href: "#" },
    { label: "Science", href: "#" },
    { label: "Learn", href: "#" },
  ],
  secondary: [
    { label: "Account", href: "#" },
    { label: "Refer", href: "#" },
  ],
}

export default JOURNEY_DATA

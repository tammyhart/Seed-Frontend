export type SceneData = {
  id: string
  title: string
  theme: "light" | "dark"
}

export const JOURNEY_DATA: SceneData[] = [
  { id: "intro", title: "Intro", theme: "light" },
  { id: "days-1-7", title: "First 7 Days", theme: "light" },
  { id: "weeks-2-4", title: "Weeks 2-4", theme: "dark" },
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

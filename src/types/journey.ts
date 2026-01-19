export type Status = "idle" | "playing" | "paused" | "scrubbing"
export type Direction = 1 | -1

export type State = {
  status: Status
  currentSceneIndex: number
  direction: Direction
  sceneCount: number
}

export type Action =
  | { type: "NEXT" }
  | { type: "PREV" }
  | { type: "PLAY" }
  | { type: "PAUSE" }
  | { type: "SET_SCENE"; payload: number }
  | { type: "SET_STATUS"; payload: Status }
  | { type: "SET_SCENE_COUNT"; payload: number }

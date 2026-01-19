import type * as Journey from "@/types/journey"

const initialJourneyState: Journey.State = {
  status: "idle",
  currentSceneIndex: 0,
  direction: 1,
  sceneCount: 0,
}

const journeyReducer = (
  state: Journey.State,
  action: Journey.Action,
): Journey.State => {
  switch (action.type) {
    case "NEXT": {
      const nextIndex = state.currentSceneIndex + 1
      if (nextIndex >= state.sceneCount) return state
      return { ...state, currentSceneIndex: nextIndex, direction: 1 }
    }
    case "PREV": {
      const prevIndex = state.currentSceneIndex - 1
      if (prevIndex < 0) return state
      return { ...state, currentSceneIndex: prevIndex, direction: -1 }
    }
    case "PLAY":
      return { ...state, status: "playing" }
    case "PAUSE":
      return { ...state, status: "paused" }
    case "SET_SCENE": {
      if (state.sceneCount === 0) return state
      const idx = Math.max(0, Math.min(action.payload, state.sceneCount - 1))
      const direction = idx > state.currentSceneIndex ? 1 : -1
      return { ...state, currentSceneIndex: idx, direction }
    }
    case "SET_STATUS":
      return { ...state, status: action.payload }
    case "SET_SCENE_COUNT":
      return { ...state, sceneCount: action.payload }
    default:
      return state
  }
}

export default journeyReducer
export { initialJourneyState }

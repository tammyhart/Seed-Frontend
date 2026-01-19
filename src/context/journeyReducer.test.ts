import { describe, it, expect } from "vitest"
import journeyReducer from "./journeyReducer"
import type * as Journey from "@/types/journey"

describe("journeyReducer", () => {
  const baseState: Journey.State = {
    status: "idle",
    currentSceneIndex: 0,
    direction: 1,
    sceneCount: 3,
  }

  describe("Advancement", () => {
    it("should increment currentSceneIndex and set direction to 1 on NEXT", () => {
      const state: Journey.State = {
        ...baseState,
        currentSceneIndex: 0,
        direction: -1,
      }
      const nextState = journeyReducer(state, { type: "NEXT" })

      expect(nextState.currentSceneIndex).toBe(1)
      expect(nextState.direction).toBe(1)
    })
  })

  describe("Boundary Guards", () => {
    it("should not increment index when at the last scene index on NEXT", () => {
      // sceneCount is 3, so max index is 2
      const state: Journey.State = { ...baseState, currentSceneIndex: 2 }
      const nextState = journeyReducer(state, { type: "NEXT" })

      expect(nextState.currentSceneIndex).toBe(2)
    })

    it("should not decrement index when at index 0 on PREV", () => {
      const state: Journey.State = { ...baseState, currentSceneIndex: 0 }
      const nextState = journeyReducer(state, { type: "PREV" })

      expect(nextState.currentSceneIndex).toBe(0)
    })
  })

  describe("Interaction", () => {
    it("should change status to 'paused' on PAUSE", () => {
      const state: Journey.State = { ...baseState, status: "playing" }
      const nextState = journeyReducer(state, { type: "PAUSE" })

      expect(nextState.status).toBe("paused")
    })
  })
})

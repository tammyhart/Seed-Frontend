import { render, fireEvent, cleanup } from "@testing-library/react"
import { vi, describe, it, expect, beforeEach, afterEach } from "vitest"
import Timeline from "./Timeline"
import useJourney from "@/hooks/useJourney"

// Mock the hook and animate function
vi.mock("@/hooks/useJourney", () => ({
  default: vi.fn(),
}))

vi.mock("motion/react", () => ({
  animate: vi.fn(),
}))

describe("Timeline", () => {
  const mockDispatch = vi.fn()
  const mockProgress = { get: () => 0, set: () => {} }

  // Typed mock for the hook
  const mockUseJourney = useJourney as unknown as ReturnType<typeof vi.fn>

  beforeEach(() => {
    mockUseJourney.mockReturnValue({
      progress: mockProgress,
      dispatch: mockDispatch,
      state: {
        sceneCount: 5,
        currentSceneIndex: 2,
        status: "idle",
        direction: 1,
      },
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
    cleanup()
  })

  it("should navigate to the previous scene when ArrowLeft is pressed", () => {
    render(<Timeline />)

    fireEvent.keyDown(window, { key: "ArrowLeft" })

    // It should pause and set the previous scene (index 1)
    expect(mockDispatch).toHaveBeenCalledWith({ type: "PAUSE" })
    expect(mockDispatch).toHaveBeenCalledWith({ type: "SET_SCENE", payload: 1 })
  })

  it("should navigate to the next scene when ArrowRight is pressed", () => {
    render(<Timeline />)

    fireEvent.keyDown(window, { key: "ArrowRight" })

    // It should pause and set the next scene (index 3)
    expect(mockDispatch).toHaveBeenCalledWith({ type: "PAUSE" })
    expect(mockDispatch).toHaveBeenCalledWith({ type: "SET_SCENE", payload: 3 })
  })

  it("should not navigate past the first scene", () => {
    mockUseJourney.mockReturnValue({
      progress: mockProgress,
      dispatch: mockDispatch,
      state: {
        sceneCount: 5,
        currentSceneIndex: 0, // At start
        status: "idle",
        direction: 1,
      },
    })

    render(<Timeline />)

    fireEvent.keyDown(window, { key: "ArrowLeft" })

    // Should not dispatch SET_SCENE because index would be same
    // Wait, my implementation: index = Math.max(0, 0-1) = 0.
    // if (index !== currentSceneIndex) handleSeek(index)
    // 0 !== 0 is false.
    // So handleSeek NOT called.
    expect(mockDispatch).not.toHaveBeenCalled()
  })

  it("should not navigate past the last scene", () => {
    mockUseJourney.mockReturnValue({
      progress: mockProgress,
      dispatch: mockDispatch,
      state: {
        sceneCount: 5,
        currentSceneIndex: 4, // At end (count 5 -> 0..4)
        status: "idle",
        direction: 1,
      },
    })

    render(<Timeline />)

    fireEvent.keyDown(window, { key: "ArrowRight" })

    // index = Math.min(4, 5) = 4.
    // 4 !== 4 is false.
    expect(mockDispatch).not.toHaveBeenCalled()
  })
})

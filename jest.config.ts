import type { Config } from "jest"
import nextJest from "next/jest.js"

const createJestConfig = nextJest({
  dir: "./",
})

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testMatch: ["**/?(*.)+(test).[jt]s?(x)", "**/*.test.tsx"],
  testPathIgnorePatterns: ["./.next/", "./node_modules/"],
  moduleDirectories: ["<rootDir>", "node_modules"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
}

export default createJestConfig(config)

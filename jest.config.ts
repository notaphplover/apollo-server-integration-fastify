import type { Config } from "@jest/types"

const config: Config.InitialOptions = {
	preset: "ts-jest",
	testEnvironment: "node",
	roots: ["src", "tests"],
	testMatch: ["**/*.test.ts"],
	globals: {
		"ts-jest": {
			tsconfig: "<rootDir>/tsconfig.json",
		},
	},
}

export default config
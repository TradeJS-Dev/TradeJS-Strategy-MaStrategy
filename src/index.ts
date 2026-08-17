import { defineStrategyPlugin } from "@tradejs/core/config";
import type { StrategyConfig, StrategyRegistryEntry } from "@tradejs/types";
import { config as maStrategyDefaultConfig } from "./MaStrategy/config";
import { MaStrategyDefinition } from "./MaStrategy/strategy";

export const strategyEntries: StrategyRegistryEntry[] = [MaStrategyDefinition];

const defaultConfigs: Record<string, StrategyConfig> = {
  MaStrategy: maStrategyDefaultConfig,
};

export const getBuiltInStrategyDefaultConfig = (
  strategyName: string,
): StrategyConfig | undefined => defaultConfigs[strategyName];

export { MaStrategyDefinition } from "./MaStrategy/strategy";
export { maStrategyDefaultConfig };
export { maStrategyManifest } from "./MaStrategy/manifest";
export { maStrategyAiAdapter } from "./MaStrategy/adapters/ai";
export { maStrategyMlAdapter } from "./MaStrategy/adapters/ml";

export default defineStrategyPlugin({ strategyEntries });

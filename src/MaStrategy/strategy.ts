import { createCostIsolatedStrategyConfigParser } from "@tradejs/strategy-kit/config";
import type { ValidatedStrategyRegistryEntry } from "@tradejs/strategy-kit/config";
import { config as DEFAULT_CONFIG, MaStrategyConfig } from "./config";
import { createMaStrategyCore } from "./core";
import { maStrategyManifest } from "./manifest";

export const MaStrategyDefinition: ValidatedStrategyRegistryEntry<MaStrategyConfig> =
  {
    defaults: DEFAULT_CONFIG,
    parseConfig: createCostIsolatedStrategyConfigParser({
      strategyName: "MaStrategy",
      defaults: DEFAULT_CONFIG,
    }),
    createCore: createMaStrategyCore,
    manifest: maStrategyManifest,
  };

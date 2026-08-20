# @tradejs/strategy-ma-strategy

TradeJS strategy plugin providing `MaStrategy`.

## Strategy overview

`MaStrategy` trades fast and slow moving-average crosses in both directions.
Gap size, MA slope, signal-candle direction, relative volume, price distance,
and benchmark correlation can filter entries; each side has independent
profit, stop, and opposing-cross exit rules.

## Logic at a glance

![MaStrategy strategy logic](https://raw.githubusercontent.com/TradeJS-Dev/TradeJS-Strategy-MaStrategy/main/docs/strategy-logic.svg)

## Signal on an example chart

The blue fast average crosses above the amber slow average; gap, slope, candle, volume, distance, and optional benchmark filters decide whether the cross is tradable.

![MaStrategy signal on an illustrative ticker chart](https://raw.githubusercontent.com/TradeJS-Dev/TradeJS-Strategy-MaStrategy/main/docs/signal-example.svg)

The illustration is schematic, not market data. Exact thresholds, confirmation
rules, and risk parameters come from the active TradeJS strategy config.

## Install

```bash
yarn add @tradejs/strategy-ma-strategy
```

Register the package in `tradejs.config.ts`:

```ts
import { defineConfig } from "@tradejs/core/config";

export default defineConfig({
  strategies: ["@tradejs/strategy-ma-strategy"],
});
```

The package exports `strategyEntries` for the TradeJS plugin loader together
with its strategy definitions, manifests, default configs, and public AI/ML
adapters. Strategy implementation changes are released from this repository,
independently of the TradeJS engine.

## Development

```bash
yarn install --immutable
yarn checks
```

Publishing is beta-first and delegated to the pinned
`TradeJS-Workflows@v1` reusable workflow. A relevant push publishes a unique
prerelease and moves the npm `beta` tag only after the production-like Project
image passes. The current verified beta is promoted to one stable `latest`
release by the weekly automation; production never consumes prereleases.

Keywords: ai, claude, codex.

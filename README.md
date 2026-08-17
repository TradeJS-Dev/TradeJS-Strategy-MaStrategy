# @tradejs/strategy-ma-strategy

TradeJS strategy plugin providing `MaStrategy`.

## Strategy overview

`MaStrategy` trades fast and slow moving-average crosses in both directions.
Gap size, MA slope, signal-candle direction, relative volume, price distance,
and benchmark correlation can filter entries; each side has independent
profit, stop, and opposing-cross exit rules.

## Logic at a glance

![MaStrategy strategy logic](https://raw.githubusercontent.com/TradeJS-Dev/TradeJS-Strategy-MaStrategy/main/docs/strategy-logic.svg)

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

Publishing is triggered by a GitHub release and delegated to the pinned
`TradeJS-Workflows@v1` reusable workflow.

Keywords: ai, claude, codex.

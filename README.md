# SolidJS-MSFS

Heavily inspired by the ease of use provided by `react-msfs` by FlyByWire

## Hooks

- `useSimVar(name:string, unit:SimVarUnitsEnum, maxStaleness = 0)`: returns a getter and setter that functions like solid's `createSignal`
- `useGlobalVar(name:string, unit:SimVarUnitsEnum, maxStaleness = 0)`: returns getter and setter for global simVar

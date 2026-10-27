export type ContextTrackerItem = {
  name: string
  tokens: number
}

export type ContextTrackerRow = {
  name: string
  tokens: number
  color: string
  kind: 'used' | 'free' | 'buffer' | 'deferred'
  items: ContextTrackerItem[]
}

export type ContextTrackerUsage = {
  rows: ContextTrackerRow[]
  totalTokens: number
  maxTokens: number
  percent: number
  compactAt: number | null
}

// One usage-limit window as the last response reported it: `five_hour` (the
// current session), `seven_day` (the current week) or another the account has.
export type UsageTrackerLimit = {
  kind: string
  percentUsed: number
  resetsAt: string | null
}

declare module 'claude-code' {
  interface PluginState {
    'watch-out': {
      isShown: boolean
      isCollapsed: boolean
      openRow: string | null
      itemLimit: number
      contextTurnBase: number | null
      contextUsage: ContextTrackerUsage | null
      limits: UsageTrackerLimit[]
      turnBase: number | null
      lastDelta: number | null
    }
  }
}

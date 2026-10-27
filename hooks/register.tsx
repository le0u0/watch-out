import type { Register } from 'claude-code'

import { registerContextTracker } from './context-tracker'
import { registerSessionTracker } from './session-tracker'

export const register: Register = on => {
  registerSessionTracker(on)
  registerContextTracker(on)
}

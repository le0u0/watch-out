# watch-out

Tracks plan usage and context window use in one mod. On by default.

## Use

- `/watch-out` shows or hides both trackers. `/watch-out on` and `/watch-out off` set it.
- The setting is kept across sessions.

## What you see

Under the prompt:

```
context 9%+0.4% ▴  usage 57%+1.5%
```

- **context 9%+0.4%**: how much of the context window is used, and how much of the window your latest turn added.
- **usage 57%**: how much of the current session's limit, the 5-hour window, is used.
- **+1.5%** after it: how much your latest request used of that window. It settles a few seconds after the request ends, and shows `+0%` when the request did not move the window. Use from other sessions while you are idle moves the first figure only.

Plan usage needs a Claude plan. With an API key there are no plan usage limits, so only context tracking shows.

## Context window

- Tokens used, the window size, and when auto-compact starts.
- How many tokens the last turn added, such as `+7.4k`.
- One colored segment per category: tools, skills, messages, system prompt, MCP, memory files, agents and free space.

### Controls

- It starts folded: the percent of the window used sits under the prompt, such as `context 5% ▴`. Press **▴** to open the card above the prompt, and the arrow next to **context** to fold it again. It remembers which you chose.
- The arrow next to a category lists what is in it, such as each skill or MCP server. Long lists show 10 at a time; press **more** for the next 10.

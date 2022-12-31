# TypeScript Discord Bot

- Welcome to the TS Discord Bot!  Here I will be explaining how everything runs.
- [Tutorial](https://sabe.io/tutorials/how-to-build-discord-bot-typescript)

## Directory Structure

- `src`: contains all the source code
  - `commands`: contains all the commands
  - `listeners`: contains all the listeners
    - `ready.ts`: the ready listener
    - `index.ts`: the index file for the listeners.  This allows us to import all the listeners at once
  - `Bot.ts`: the main bot file
- `.env`: the environment file.  You will need to create this yourself.  It contains the following variables:
  - `TOKEN`: the bot token
- `node_modules`: self explanatory
- `.gitignore`: self explanatory
- `package.json`: self explanatory
- `README.md`: self explanatory
- `yarn.lock`: self explanatory
- `tsconfig.json`: Configures the TypeScript compiler
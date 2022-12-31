# TypeScript Discord Bot

- Welcome to the TS Discord Bot!  Here I will be explaining how everything runs.
- [Tutorial](https://sabe.io/tutorials/how-to-build-discord-bot-typescript)

## Directory Structure

- `src`: contains all the source code
  - `commands`: contains all the commands
    - `index.ts`: the index file for the commands.  This allows us to import all the commands at once.  Interfaces are also defined here.
    - `<<filename.ts>>`: the command file.  This is where the command is defined.
  - `listeners`: contains all the listeners
    - `index.ts`: the index file for the listeners.  This allows us to import all the listeners at once. Interfaces are also defined here.
    - `ready.ts`: the ready listener, which runs once when the bot is ready.
    - `interactionCreate.ts`: Event which emits whenever an interaction is received.  This is where we handle slash commands.
  - `Bot.ts`: the main bot file
- `.env`: the environment file.  You will need to create this yourself.  It contains the following variables:
  - `TOKEN`: the bot token.  You'll need to create your own bot and get the token from the [Discord Developer Portal](https://discord.com/developers/applications)
- `tsconfig.json`: Configures the TypeScript compiler
- `.eslintrc.json`: Configures ESLint
- `node_modules`: self explanatory
- `.gitignore`: self explanatory
- `package.json`: self explanatory
- `README.md`: self explanatory
- `yarn.lock`: self explanatory
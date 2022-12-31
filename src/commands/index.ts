import { ChatInputApplicationCommandData, Client, CommandInteraction } from 'discord.js';
import fs from 'fs';

interface Command extends ChatInputApplicationCommandData {
  run: (interaction: CommandInteraction, client?: Client) => void;
}

const commandFiles = fs.readdirSync(__dirname).filter(file => (file.endsWith('.ts') && file !== 'index.ts'));

const Commands: Command[] = [];
for (const file of commandFiles) {
  const [fileName, fileExtension] = file.split('.');
  const commandObject = require(`./${fileName}.${fileExtension}`);
  const command: Command = commandObject[fileName];
  
  Commands.push(command);
}

export { Command, Commands };
import { ApplicationCommandType, CommandInteraction } from 'discord.js';
import { Command } from './';

export const Ping: Command = {
  name: 'ping',
  description: 'Returns pong!',
  type: ApplicationCommandType.ChatInput,
  run: async (
    interaction: CommandInteraction,
  ): Promise<void> => {
    const content = 'Pong!';
    
    await interaction.deferReply();
    await interaction.followUp({
      // ephemeral makes message visible only to user who ran command
      ephemeral: true,
      content,
    })
  }
}
import { ApplicationCommandType, CommandInteraction, Client } from 'discord.js';
import { Command } from '../Command';

export const Ping: Command = {
  name: 'ping',
  description: 'Returns pong!',
  type: ApplicationCommandType.ChatInput,
  run: async (
    _: Client,
    interaction: CommandInteraction,
  ): Promise<void> => {
    const content = 'Pong!';

    await interaction.followUp({
      ephemeral: true,
      content,
    })
  }
}
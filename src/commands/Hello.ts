import { ApplicationCommandType, CommandInteraction, Client } from 'discord.js';
import { Command } from '../Command';

export const Hello: Command = {
  name: 'hello',
  description: 'Returns a standard greeting.',
  type: ApplicationCommandType.ChatInput,
  run: async (
    _: Client,
    interaction: CommandInteraction,
  ): Promise<void> => {
    const content = 'Hello, world!';

    await interaction.followUp({
      ephemeral: true,
      content,
    });
  },
};

import { CommandInteraction, Client } from 'discord.js';
import { Command } from '../Command';

export const Hello: Command = {
  name: 'hello',
  description: 'Returns a standard greeting.',
  type: 1,
  run: async (
    client: Client,
    interaction: CommandInteraction,
  ): Promise<void> => {
    const content = 'Hello, world!';

    await interaction.followUp({
      ephemeral: true,
      content,
    });
  },
};

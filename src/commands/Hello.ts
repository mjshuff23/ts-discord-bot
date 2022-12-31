import { ApplicationCommandType, CommandInteraction } from 'discord.js';
import { Command } from './';

export const Hello: Command = {
  name: 'hello',
  description: 'Returns a standard greeting.',
  type: ApplicationCommandType.ChatInput,
  run: async (
    interaction: CommandInteraction,
  ): Promise<void> => {
    const content = 'Hello, world!';

    await interaction.deferReply();
    await interaction.followUp({
      ephemeral: true,
      content,
    });
  },
};

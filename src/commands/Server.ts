import { ApplicationCommandType, CommandInteraction } from 'discord.js';
import { Command } from './';

export const Server: Command = {
  name: 'server',
  description: 'Returns server info!',
  type: ApplicationCommandType.ChatInput,
  run: async (
    interaction: CommandInteraction,
  ): Promise<void> => {
    if (!interaction.guild) {
      await interaction.deferReply();
      await interaction.followUp({
        content: 'This command can only be used in a server!',
        ephemeral: true,
      })
    } else {
      const name = interaction.guild.name;
      const id = interaction.guild.id;
      const content = `Name: ${name}\nID: ${id}`;
  
      await interaction.deferReply();
      await interaction.followUp({
        content,
        ephemeral: true,
      });
    }
  }
}
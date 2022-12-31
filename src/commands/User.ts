import { ApplicationCommandType, CommandInteraction, GuildMember } from 'discord.js';
import { Command } from './';

export const User: Command = {
  name: 'user',
  description: 'Returns user info!',
  type: ApplicationCommandType.ChatInput,
  run: async (
    interaction: CommandInteraction,
  ): Promise<void> => {
    const username = interaction.user.username;
    const guildMember= interaction.member as GuildMember;
    const joinedAt = guildMember.joinedAt;
    const content = `Username: ${username}\nJoined At: ${joinedAt}`

    
    await interaction.deferReply();
    await interaction.followUp({ 
      content,
      ephemeral: true
    })
  }
}